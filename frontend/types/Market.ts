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
    vehicle: IVehicle;
    price: number;
    created_at: string;
    updated_at: string;
    images: IVehicleImage[];
}

export interface ISaleCart {
    id: number;
    vehicle: IVehicleCart;
    price: number;
    images: IVehicleImage[];
}
