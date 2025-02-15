"use client";

import { ISaleLargeCart } from "@/types/Market";
import MImage from "../Misc/MediaImage";
import { VehicleName } from "./VehicleName";
import { Price } from "../Misc/Price";
import { TechInfo } from "../Misc/TechInfo";
import { motion } from "framer-motion";
import { searchCartItemVars } from "@/utils/motionVariants";
import Link from "next/link";

const SaleLargeItem = ({ saleData }: { saleData: ISaleLargeCart }) => {
    const vehicleImage = saleData.images[saleData.images.length - 1]?.image_url;
    const vehicle = saleData.vehicle;

    return (
        <motion.div
            variants={searchCartItemVars}
            className="flex flex-row w-[48%] my-4"
        >
            <Link
                href={`/sale/${saleData.id}`}
                className="relative flex justify-center items-center w-[45%] h-[240px] text-center"
            >
                {vehicleImage ? (
                    <MImage
                        src={vehicleImage}
                        alt={saleData.vehicle.model}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                ) : (
                    <span>Немає зображення</span>
                )}
            </Link>

            <div className="flex flex-col w-[55%] ml-[15px] text-[20px]">
                <VehicleName id={saleData.id} {...vehicle} />
                <Price amount={saleData.price} />
                {/* @ts-ignore */}
                <TechInfo {...vehicle} />
            </div>
        </motion.div>
    );
};

export default SaleLargeItem;
