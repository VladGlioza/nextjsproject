"use client";

import { useState, useEffect } from "react";
import { Button, Cascader, DatePicker, message } from "antd";
import { useSession } from "next-auth/react";
import { SaleDescWrapper } from "../Misc/SaleDescWrapper";
import dayjs from "dayjs";
import type { CascaderProps, GetProp } from "antd";
import CarCategories from "@/data/categories";
import Regions from "@/data/regions";
import Brands from "@/data/brands";
import { CarMenuOption } from "@/types/CarBrands";
import { Input } from "antd";
import addSaleSchema from "@/validators/saleValidator";
import { useRouter } from "next/navigation";

type DefaultOptionType = GetProp<CascaderProps, "options">[number];

const AddSaleForm = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [brand, setBrand] = useState<string | null>(null);
    const [model, setModel] = useState<string | undefined>(undefined);
    const [vType, setVType] = useState<string | null>(null);
    const [region, setRegion] = useState<string | null>(null);
    const [year, setYear] = useState<number | null>(null);
    const [color, setColor] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(
        undefined
    );
    const [vinCode, setVinCode] = useState<string | undefined>(undefined);
    const [price, setPrice] = useState<number>(0);
    const [brandOptions, setBrandOptions] = useState<DefaultOptionType[]>(
        Brands.cars
    );

    const { data: session } = useSession();
    const router = useRouter();

    async function handleFormSubmit() {
        const payload = {
            brand: brand,
            model: model,
            v_type: vType,
            region: region,
            year: dayjs(year).year(),
            color: color,
            vehicle_description: description || "",
            price: price,
            vin_code: vinCode,
        };
        try {
            await addSaleSchema.validate(payload, { abortEarly: false });
        } catch (err) {
            return;
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/market/add-sale/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user.access}`,
                },
                method: "POST",
                body: JSON.stringify(payload),
            }
        );
        const data = await response.json();
        if (data.id) {
            router.push(`/sale/${data.id}`);
            messageApi.open({
                type: "success",
                content: "Успішно додано пропозицію",
            });
        } else {
            messageApi.open({
                type: "error",
                content: data.error,
            });
        }
    }

    const onChange = (value: any, label: string) => {
        const optionValue =
            Array.isArray(value) && value.length > 0 ? value[0] : null;
        switch (label) {
            case "Марка":
                setBrand(optionValue);
                break;
            case "Тип транспорту":
                setVType(optionValue);
                break;
            case "Регіон":
                setRegion(optionValue);
                break;
            default:
                break;
        }
    };
    const handleDescChange = (e: any) => {
        setDescription(e.target.value);
    };

    const items = [
        {
            label: "Тип транспорту",
            data: CarCategories.filter((category) => category.value !== "any"),
            value: vType,
        },
        {
            label: "Марка",
            data: brandOptions,
            value: brand,
        },
        { label: "Регіон", data: Regions, value: region },
    ];

    const filter = (inputValue: string, path: DefaultOptionType[]) =>
        path.some(
            (option) =>
                (option.label as string)
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()) > -1
        );

    useEffect(() => {
        setBrand(null);
        const typeToOptions: { [key: string]: CarMenuOption[] } = {
            car: Brands.cars,
            motorcycle: Brands.motorcycles,
            truck: Brands.trucks,
            bus: Brands.buses,
            motorhome: Brands.motorhomes,
        };
        setBrandOptions(
            vType && typeToOptions[vType] ? typeToOptions[vType] : []
        );
    }, [vType]);

    return (
        <div>
            {contextHolder}
            <SaleDescWrapper queue={1} label="Основна інформація">
                {items.map((item, idx) => {
                    return (
                        <div className="mb-[10px]" key={idx}>
                            <Cascader
                                options={item.data}
                                onChange={(value, selectedOptions) =>
                                    onChange(value, item.label)
                                }
                                value={item.value !== null ? [item.value] : []}
                                placeholder={item.label}
                                showSearch={{ filter }}
                                size="large"
                                notFoundContent="Спочатку оберіть тип транспорту"
                            />
                        </div>
                    );
                })}
                <div className="w-[44%] mb-[10px]">
                    <Input
                        value={model}
                        placeholder="Модель"
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>
                <DatePicker
                    className="w-fit my-1"
                    name="year"
                    value={year}
                    onChange={(value) => setYear(value)}
                    picker="year"
                    placeholder="Рік випуску"
                    minDate={dayjs().year(1900)}
                    maxDate={dayjs().year(2024)}
                />
            </SaleDescWrapper>
            <SaleDescWrapper queue={2} label="Опис автомобіля">
                <textarea
                    maxLength={2000}
                    name="vehicle_description"
                    placeholder="Опис"
                    className="h-[150px] border-gray-400 border-2 rounded my-3 resize-none"
                    onChange={handleDescChange}
                    value={description}
                />
                <Input
                    className="w-[44%]"
                    value={color}
                    placeholder="Колір"
                    onChange={(e) => setColor(e.target.value)}
                />
                <Input
                    className="w-[44%]"
                    value={vinCode}
                    placeholder="VIN код"
                    onChange={(e) => setVinCode(e.target.value)}
                />
            </SaleDescWrapper>
            <SaleDescWrapper queue={3} label="Вартість в $">
                <Input
                    className="w-[44%]"
                    value={price}
                    placeholder="Ціна"
                    onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
                />
            </SaleDescWrapper>
            <Button onClick={handleFormSubmit} type="primary">
                Опублікувати
            </Button>
        </div>
    );
};

export default AddSaleForm;
