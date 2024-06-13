"use client";

import { ISaleCart } from "@/types/Market";
import { Price } from "../Misc/Price";
import MImage from "../Misc/MediaImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { VehicleName } from "./VehicleName";

const SaleItem = ({ saleData }: { saleData: ISaleCart }) => {
    const vehicleImage = saleData.images[0]?.image;
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
                href={`/offer/${saleData.id}`}
                className="flex flex-col w-[315px] m-[10px] bounce_anim"
            >
                <div className="relative flex justify-center items-center w-full text-center h-[220px]">
                    {vehicleImage ? (
                        <MImage
                            src={saleData.images[0].image}
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
                        {vehicle.mileage > 0 ? vehicle.mileage : vehicle.region}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export default SaleItem;
