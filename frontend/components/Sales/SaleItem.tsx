import { ISaleCart } from "@/types/Market";
import { Span } from "next/dist/trace";
import Image from "next/image";
import { Price } from "../Misc/Price";

const SaleItem = ({ saleData }: { saleData: ISaleCart }) => {
    const vehicleImage = saleData.images[0]?.image;
    const vehicle = saleData.vehicle;

    return (
        <div className="flex flex-col w-[220px]">
            <div className="flex justify-center items-center w-full text-center h-[140px]">
                {vehicleImage ? (
                    <Image
                        src={saleData.images[0].image}
                        alt={saleData.vehicle.model}
                        width={220}
                        height={140}
                    />
                ) : (
                    <span>Немає зображення</span>
                )}
            </div>

            <span className="text-[15px] text-cyan-700">
                {vehicle.brand} {vehicle.model} {vehicle.year}
            </span>

            <div className="flex flex-row">
                <Price amount={saleData.price} />
                <span className="ml-[15px]">
                    {vehicle.mileage > 0 ? vehicle.mileage : vehicle.region}
                </span>
            </div>
        </div>
    );
};

export default SaleItem;
