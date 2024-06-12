"use client";

import React, { FC } from "react";
import { useCurrency } from "@/providers/CurrencyContext";
import { Skeleton } from "antd";
import { exchangeRates, currencySymbols } from "@/data/currency";

interface PriceProps {
    amount: number;
}

export const Price: FC<PriceProps> = ({ amount }) => {
    const { currency, loading } = useCurrency();

    if (loading) {
        return <Skeleton.Input size="small" active />;
    }

    const convertedAmount = amount / exchangeRates[currency];
    const symbol = currencySymbols[currency];

    return (
        <span className="text-base font-bold text-green-600">
            {convertedAmount.toFixed(0)} {symbol}
        </span>
    );
};
