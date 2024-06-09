"use client";

import React, { useState, useEffect } from "react";
import { Dropdown, Space, Skeleton, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Cookies from "js-cookie";

const items = [
    {
        key: "uah",
        label: <button>UAH</button>,
    },
    {
        key: "usd",
        label: <button>USD</button>,
    },
    {
        key: "eur",
        label: <button>EUR</button>,
    },
];

const defaultCurrency = items[0].key;

export const CurrencySelector = () => {
    const [currency, setCurrency] = useState<string>("uah");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const savedCurrency = Cookies.get("currency");
        if (savedCurrency && items.some((item) => item.key === savedCurrency)) {
            setCurrency(savedCurrency);
        } else {
            setCurrency(defaultCurrency);
            Cookies.set("currency", defaultCurrency, { expires: 365 });
        }
        setLoading(false);
    }, []);

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        setCurrency(e.key);
        Cookies.set("currency", e.key, { expires: 365 });
        console.log("ss");
    };

    const filteredItems = items.filter((item) => item.key !== currency);

    return (
        <Dropdown menu={{ items: filteredItems, onClick: handleMenuClick }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {loading ? <Spin /> : currency.toUpperCase()}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};
