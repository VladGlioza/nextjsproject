"use client";

import React, { useState, useEffect } from "react";
import s from "@/styles/header.module.css";
import { Cascader, Button } from "antd";
import type { CascaderProps, GetProp } from "antd";
import Brands from "@/data/brands";
import CarCategories from "@/data/categories";
import Regions from "@/data/regions";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { CarMenuOption } from "@/types/CarBrands";

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

export const Navbar = () => {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>("any");
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [selectedYearRange, setSelectedYearRange] = useState<
        [number | null, number | null] | null
    >(null);

    const [brandOptions, setBrandOptions] = useState<DefaultOptionType[]>(
        Brands.cars
    );

    const router = useRouter();

    useEffect(() => {
        setSelectedBrand(null);
        const typeToOptions: { [key: string]: CarMenuOption[] } = {
            car: Brands.cars,
            motorcycle: Brands.motorcycles,
            truck: Brands.trucks,
            bus: Brands.buses,
            motorhome: Brands.motorhomes,
        };
        setBrandOptions(
            selectedType && typeToOptions[selectedType]
                ? typeToOptions[selectedType]
                : []
        );
    }, [selectedType]);

    const onChange = (
        value: any,
        selectedOptions: DefaultOptionType[],
        label: string
    ) => {
        const optionValue =
            Array.isArray(value) && value.length > 0 ? value[0] : null;
        switch (label) {
            case "Марка":
                setSelectedBrand(optionValue);
                break;
            case "Тип транспорту":
                setSelectedType(optionValue);
                break;
            case "Регіон":
                setSelectedRegion(optionValue);
                break;
            default:
                break;
        }
    };

    const filter = (inputValue: string, path: DefaultOptionType[]) =>
        path.some(
            (option) =>
                (option.label as string)
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()) > -1
        );

    const items = [
        {
            label: "Марка",
            data: brandOptions,
            value: selectedBrand,
        },
        {
            label: "Тип транспорту",
            data: CarCategories,
            defaultValue: ["any"],
            value: selectedType,
        },
        { label: "Регіон", data: Regions, value: selectedRegion },
    ];

    const { RangePicker } = DatePicker;

    const handleYearRangeChange = (
        dates: [Dayjs | null, Dayjs | null] | null
    ) => {
        if (dates) {
            setSelectedYearRange([
                dates[0]?.year() || null,
                dates[1]?.year() || null,
            ]);
        } else {
            setSelectedYearRange(null);
        }
    };

    const handleSearch = () => {
        const queryParams = new URLSearchParams();

        if (selectedType && selectedType !== "any") {
            queryParams.append("car_type", selectedType);
        }
        if (selectedBrand) {
            queryParams.append("brand", selectedBrand);
        }
        if (selectedRegion) {
            queryParams.append("region", selectedRegion);
        }
        if (selectedYearRange) {
            if (selectedYearRange[0])
                queryParams.append("year_gte", selectedYearRange[0].toString());
            if (selectedYearRange[1])
                queryParams.append("year_lte", selectedYearRange[1].toString());
        }

        const searchURL = `/search?${queryParams.toString()}`;
        router.push(searchURL);
    };

    return (
        <div className={`${s.navbar} bg-orange-400`}>
            {items.map((item, idx) => {
                return (
                    <Cascader
                        key={idx}
                        options={item.data}
                        onChange={(value, selectedOptions) =>
                            onChange(value, selectedOptions, item.label)
                        }
                        value={item.value !== null ? [item.value] : []}
                        placeholder={item.label}
                        showSearch={{ filter }}
                        size="large"
                        defaultValue={item.defaultValue}
                        notFoundContent="Спочатку оберіть тип транспорту"
                    />
                );
            })}
            <RangePicker
                minDate={dayjs().year(1900)}
                maxDate={dayjs().year(2024)}
                picker="year"
                placeholder={["Рік випуску", ""]}
                allowEmpty
                onChange={handleYearRangeChange}
            />
            <Button
                type="primary"
                icon={<SearchOutlined />}
                size="large"
                onClick={handleSearch}
            >
                Пошук
            </Button>
        </div>
    );
};
