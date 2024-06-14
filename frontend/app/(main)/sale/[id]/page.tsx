import React from "react";
import { Carousel } from "antd";
import { getDataFromAPI } from "@/utils/getData";
import { ISale } from "@/types/Market";
import MImage from "@/components/Misc/MediaImage";
import { Price } from "@/components/Misc/Price";
import { formatMileage, formatRegion } from "@/utils/formatValues";
import { UserCart } from "@/components/Misc/UserCart";
import { PhoneNumber } from "@/components/Misc/PhoneNumber";
import { VinCode } from "@/components/Misc/VinCode";
import { CheckOutlined } from "@ant-design/icons";

export default async function SearchPage({
    params,
}: {
    params: { id: string };
}) {
    const data: ISale = await getDataFromAPI(`/market/get-sale/${params.id}/`);
    const vehicle = data.vehicle;

    const descItems = [
        { label: "Тип кузову", value: vehicle.body_type },
        { label: "Коробка передач", value: vehicle.gearbox_type },
        { label: "Привід", value: vehicle.drive_type },
        { label: "Колір", value: vehicle.color },
    ];

    return (
        <div className="flex flex-col mt-[15px] bg-amber-50">
            <h1 className="font-bold text-[33px] ml-[15px]">
                {vehicle.brand} {vehicle.model} {vehicle.year}
            </h1>
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col text-[18px] ml-[15px]">
                    <div className="text-[28px]">
                        <Price amount={data.price} />
                    </div>
                    <VinCode code={vehicle.vin_code} />
                    <span className="font-bold">
                        {formatMileage(vehicle.mileage)} пробіг
                    </span>
                    <span className="font-semibold text-cyan-600">
                        {formatRegion(vehicle.region)}
                    </span>
                    <UserCart userName={data.account.name} />
                    <PhoneNumber phoneNumber={data.account.phone_number} />
                </div>
                <div className="w-[60%]">
                    <Carousel arrows infinite>
                        {data.images.map((saleImg, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="relative flex w-full h-[550px]"
                                >
                                    <MImage
                                        src={saleImg.image}
                                        alt={saleImg.image}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="flex w-[100%] justify-center my-[20px]">
                <div className="flex flex-row w-[80%] text-[19px] py-5">
                    <div className="flex flex-col w-[48%]">
                        <span className="font-bold">Характеристики</span>
                        <span>{vehicle.body_type}</span>
                        {descItems.map((item, idx) => {
                            return (
                                <div key={idx} className="flex flex-row w-full">
                                    <span className="w-[50%] text-gray-500">
                                        <CheckOutlined />
                                        <span className="ml-[5px]">
                                            {item.label}
                                        </span>
                                    </span>
                                    <span>{item.value ?? "Не вказано"}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col w-[48%]">
                        {vehicle.description && (
                            <>
                                <span className="font-bold">Опис</span>
                                <pre
                                    style={{ fontFamily: "inherit" }}
                                    className="text-wrap mb-[30px]"
                                >
                                    {vehicle.description}
                                </pre>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
