import { IVehicleCart } from "@/types/Market";
import Link from "next/link";
import { Fragment } from "react";

interface IVehicleName extends IVehicleCart {
    id?: number;
}

export const VehicleName = ({ id, brand, model, year }: IVehicleName) => {
    const carName = (
        <Fragment>
            {brand} {model} {year}
        </Fragment>
    );
    const vNameClass = "text-[17px] text-cyan-700";

    return (
        <Fragment>
            {id ? (
                <Link className={vNameClass} href={`/sale/${id}`}>
                    {carName}
                </Link>
            ) : (
                <span className={vNameClass}>{carName}</span>
            )}
        </Fragment>
    );
};
