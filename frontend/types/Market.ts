import { IAccount } from "./Profile";

export interface IVehicle {
    vehicle_type: string;
    brand: string;
    model: string;
    year: number;
    region: string;
    body_type: string;
    fuel_type: string;
    drive_type: string;
    mileage: number;
    engine_volume: number;
    color: string;
    gearbox_type: string;
    description: string;
    vin_code: string;
}

export interface IVehicleCart {
    brand: string;
    model: string;
    year: number;
    region: string;
    mileage: number;
}

export interface IVehicleImage {
    image: string;
    description: string;
}

export interface ISale {
    account: IAccount;
    vehicle: IVehicle;
    price: number;
    created_at: string;
    updated_at: string;
    images: IVehicleImage[];
}

export interface ISaleCart extends Omit<ISale, "vehicle"> {
    id: number;
    vehicle: IVehicleCart;
}

export interface IVehicleLargeCart extends IVehicleCart {
    gearbox_type: string;
    engine_volume: number;
    description: string;
    fuel_type: string;
}

export interface ISaleLargeCart extends Omit<ISaleCart, "vehicle"> {
    vehicle: IVehicleLargeCart;
}

export interface IVehicleVinSearch {
    brand: string;
    model: string;
    year: number;
    region: string;
    vin_code: string;
}

export interface ISaleVinSearchCart {
    id: number;
    price: number;
    vehicle: IVehicleVinSearch;
}
