import { IVehicle } from "@/types/Market";
import { formatMileage, formatRegion } from "@/utils/formatValues";
import Image from "next/image";

export const TechInfo = ({
    mileage,
    region,
    fuel_type,
    engine_volume,
    gearbox_type,
}: IVehicle) => {
    console.log(region);
    const info = [
        { icon: "speedometer", value: formatMileage(mileage) },
        { icon: "map pin", value: formatRegion(region) },
        {
            icon: "gasoline",
            value: `${fuel_type} ${
                engine_volume > 0 ? `, ${engine_volume} л.` : ""
            }`,
        },
        { icon: "gearbox", value: gearbox_type },
    ];

    return (
        <div className="flex flex-row flex-wrap w-full text-[14px]">
            {info.map(({ icon, value }, idx) => (
                <div
                    key={idx}
                    className="flex flex-row m-[4px] w-[47%] align-middle items-center"
                >
                    <Image
                        className="mr-[3px]"
                        src={`/icons/${icon}.png`}
                        width={30}
                        height={30}
                        alt={icon}
                    />
                    <span>{value}</span>
                </div>
            ))}
        </div>
    );
};
