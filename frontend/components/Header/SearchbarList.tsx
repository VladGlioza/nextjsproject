"use client";

import React, {
    useEffect,
    useState,
    useRef,
    SetStateAction,
    Dispatch,
} from "react";
import { SearchbarListItem } from "./SearchbarListItem";
import { SyncOutlined } from "@ant-design/icons";
import { ISaleVinSearchCart } from "@/types/Market";
import Link from "next/link";
import useOutsideClick from "@/hooks/useOutsideClick";
import { formatRegion } from "@/utils/formatValues";

const SearchbarList = ({
    searhTerm,
    inputValue,
    setInputValue,
}: {
    searhTerm: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [results, setResults] = useState<ISaleVinSearchCart[] | []>([]);

    const searchListRef = useRef<HTMLDivElement>(null);

    useOutsideClick(searchListRef, () => setResults([]));

    useEffect(() => {
        const fetchResults = async () => {
            setResults([]);
            if (searhTerm) {
                setLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/market/search-by-vin/?vin_code=${inputValue}`
                );
                const data: ISaleVinSearchCart[] = await response.json();
                setResults(data);
                setLoading(false);
            }
        };
        fetchResults();
    }, [searhTerm]);

    const onItemClick = () => {
        setResults([]);
        setInputValue("");
    };

    const highlightMatchingText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"));
        return parts.map((part, index) => (
            <span
                key={index}
                style={
                    part.toLowerCase() === highlight.toLowerCase()
                        ? { backgroundColor: "yellow" }
                        : {}
                }
            >
                {part}
            </span>
        ));
    };

    return (
        <div
            ref={searchListRef}
            className="w-full absolute bottom left text-black"
        >
            {loading && (
                <SearchbarListItem>
                    <SyncOutlined spin />
                    <span className="ml-[5px] text-gray-500">
                        Пошук пропозицій..
                    </span>
                </SearchbarListItem>
            )}
            {results.slice(0, 5).map((item) => {
                const veh = item.vehicle;
                return (
                    <SearchbarListItem key={item.id}>
                        <Link onClick={onItemClick} href={`/sale/${item.id}`}>
                            <span>
                                <span className="font-semibold">
                                    {highlightMatchingText(
                                        veh.vin_code,
                                        inputValue
                                    )}
                                </span>{" "}
                                - {veh.brand} {veh.model} {veh.year} -{" "}
                                {formatRegion(veh.region)}
                            </span>
                        </Link>
                    </SearchbarListItem>
                );
            })}
        </div>
    );
};

export default SearchbarList;
