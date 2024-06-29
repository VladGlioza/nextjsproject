"use client";

import { ISaleCart } from "@/types/Market";
import { Price } from "../Misc/Price";
import MImage from "../Misc/MediaImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { VehicleName } from "./VehicleName";
import { formatMileage } from "@/utils/formatValues";

const SaleItem = ({ saleData }: { saleData: ISaleCart }) => {
    const vehicleImage = saleData.images[0]?.image_url;
    const vehicle = saleData.vehicle;

    const itemVar = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div variants={itemVar} initial="hidden" animate="visible">
            <Link
                href={`/sale/${saleData.id}`}
                className="flex flex-col w-[310px] m-[10px] bounce_anim"
            >
                <div className="relative flex justify-center items-center w-full text-center h-[220px]">
                    {vehicleImage ? (
                        <MImage
                            src={
                                saleData.images[saleData.images.length - 1]
                                    .image_url
                            }
                            alt={saleData.vehicle.model}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    ) : (
                        <span>Немає зображення</span>
                    )}
                </div>
                <VehicleName {...vehicle} />
                <div className="flex flex-row text-[19px]">
                    <Price amount={saleData.price} />
                    <span className="ml-[15px]">
                        {vehicle.mileage > 0
                            ? formatMileage(vehicle.mileage)
                            : vehicle.region}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export default SaleItem;
