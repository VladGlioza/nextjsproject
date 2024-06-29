"use client";

import { useState } from "react";
import { Logo } from "../Logo";
import { Input } from "../UI/Input";
import Link from "next/link";
import Image from "next/image";
import useDebounce from "@/hooks/useDebounce";
import SearchbarList from "./SearchbarList";

export const Searchbar = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const debounceSearchValue = useDebounce(inputValue, 500);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-row items-center py-6 justify-between w-full">
            <Logo />
            <div className="relative w-[50%]">
                <Input
                    type="text"
                    name="searchbar"
                    onChange={handleOnChange}
                    value={inputValue}
                    placeholder="Пошук за VIN-кодом"
                    containerClass="w-full"
                />
                <SearchbarList
                    searhTerm={debounceSearchValue}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </div>
            <div className="flex flex-row justify-between">
                <Link href="/profile" className="ml-[15px]">
                    <Image
                        src={"/icons/User.png"}
                        width={32}
                        height={32}
                        alt="User"
                    />
                </Link>
            </div>
        </div>
    );
};
