"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SaleLargeItem from "./SaleLargeItem";
import { motion } from "framer-motion";
import { ISaleLargeCart } from "@/types/Market";
import { PageLoader } from "../Misc/PageLoader";
import { searchContainerVars } from "@/utils/motionVariants";
import { NotFound } from "./NotFound";

const SearchComponent = () => {
    const searchParams = useSearchParams();
    const [results, setResults] = useState<ISaleLargeCart[] | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
            const car_type = searchParams.get("car_type");
            const brand = searchParams.get("brand");
            const region = searchParams.get("region");
            const year_gte = searchParams.get("year_gte");
            const year_lte = searchParams.get("year_lte");

            const params: { [key: string]: string | null } = {
                car_type,
                brand,
                region,
                year_gte,
                year_lte,
            };

            const filteredParams = Object.keys(params)
                .filter(
                    (key) => params[key] !== null && params[key] !== undefined
                )
                .reduce((acc, key) => {
                    acc[key] = params[key] as string;
                    return acc;
                }, {} as { [key: string]: string });

            const queryString = new URLSearchParams(filteredParams).toString();

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/market/search/?${queryString}`
                );
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("e: ", error);
            }
        };
        setResults(null);
        fetchResults();
    }, [searchParams]);

    if (!results) return <PageLoader />;
    if (results.length == 0) return <NotFound />;

    return (
        <motion.div
            variants={searchContainerVars}
            className="w-full flex flex-row flex-wrap justify-between"
            initial="hidden"
            animate="visible"
        >
            {results.map((saleData, idx) => {
                return <SaleLargeItem key={idx} saleData={saleData} />;
            })}
        </motion.div>
    );
};

export default SearchComponent;
