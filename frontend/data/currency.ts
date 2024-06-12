import { TCurrency } from "@/types/Currency";

export const exchangeRates: Record<TCurrency, number> = {
    uah: 1,
    usd: 40,
    eur: 44,
};

export const currencySymbols: Record<TCurrency, string> = {
    uah: "₴",
    usd: "$",
    eur: "€",
};
