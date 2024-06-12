"use client";

import React, { ReactNode } from "react";
import { Dropdown, Space, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Cookies from "js-cookie";
import { useCurrency } from "@/providers/CurrencyContext";
import { TCurrency } from "@/types/Currency";

const items: { key: TCurrency; label: ReactNode }[] = [
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

export const CurrencySelector = () => {
    const { currency, setCurrency, loading } = useCurrency();

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        setCurrency(e.key as TCurrency);
        Cookies.set("currency", e.key, { expires: 365 });
    };

    const filteredItems = items.filter((item) => item.key !== currency);

    return (
        <Dropdown
            trigger={["click"]}
            menu={{ items: filteredItems, onClick: handleMenuClick }}
        >
            <button style={{ cursor: "pointer" }}>
                <Space>
                    {loading ? <Spin /> : currency.toUpperCase()}
                    <DownOutlined />
                </Space>
            </button>
        </Dropdown>
    );
};
