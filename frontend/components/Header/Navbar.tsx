"use client";

import React from "react";
import s from "@/styles/header.module.css";
import { Cascader } from "antd";
import type { CascaderProps, GetProp } from "antd";
import { CarMenuOption } from "@/types/CarBrands";
import CarBrands from "@/data/brands";
import CarCategories from "@/data/categories";
import Regions from "@/data/regions";

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

export const Navbar = () => {
    const onChange: CascaderProps<CarMenuOption>["onChange"] = (
        value,
        selectedOptions
    ) => {
        console.log(value, selectedOptions);
    };

    const filter = (inputValue: string, path: DefaultOptionType[]) =>
        path.some(
            (option) =>
                (option.label as string)
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()) > -1
        );

    const items = [
        { label: "Марка", data: CarBrands },
        { label: "Тип транспорту", data: CarCategories, defaultValue: ["any"] },
        { label: "Регіон", data: Regions },
    ];

    return (
        <div className={`${s.navbar} bg-orange-400`}>
            {items.map((item) => {
                return (
                    <Cascader
                        options={item.data}
                        onChange={onChange}
                        placeholder={item.label}
                        showSearch={{ filter }}
                        size="large"
                        defaultValue={item.defaultValue}
                        notFoundContent="Немає інформації"
                    />
                );
            })}
        </div>
    );
};
