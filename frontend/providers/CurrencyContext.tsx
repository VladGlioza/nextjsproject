"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import Cookies from "js-cookie";
import { TCurrency } from "@/types/Currency";

interface CurrencyContextProps {
    currency: TCurrency;
    setCurrency: (currency: TCurrency) => void;
    loading: boolean;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(
    undefined
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<TCurrency>("uah");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const savedCurrency = Cookies.get("currency") as TCurrency;
        if (savedCurrency && ["uah", "usd", "eur"].includes(savedCurrency)) {
            setCurrency(savedCurrency);
        } else {
            Cookies.set("currency", "uah", { expires: 365 });
        }
        setLoading(false);
    }, []);

    const updateCurrency = (newCurrency: TCurrency) => {
        setCurrency(newCurrency);
        Cookies.set("currency", newCurrency, { expires: 365 });
    };

    return (
        <CurrencyContext.Provider
            value={{ currency, setCurrency: updateCurrency, loading }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
};
