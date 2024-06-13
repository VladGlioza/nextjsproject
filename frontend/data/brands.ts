import { CarMenuOption } from "@/types/CarBrands";

const CarBrands: CarMenuOption[] = [
    { value: "audi", label: "Audi" },
    { value: "bmw", label: "BMW" },
    { value: "chevrolet", label: "Chevrolet" },
    { value: "daewoo", label: "Daewoo" },
    { value: "ford", label: "Ford" },
    { value: "honda", label: "Honda" },
    { value: "kia", label: "Kia" },
    { value: "lexus", label: "Lexus" },
    { value: "mazda", label: "Mazda" },
    { value: "mercedes_benz", label: "Mercedes-Benz" },
    { value: "mitsubishi", label: "Mitsubishi" },
    { value: "nissan", label: "Nissan" },
    { value: "toyota", label: "Toyota" },
];

const MotorcycleBrands: CarMenuOption[] = [
    { value: "harley_davidson", label: "Harley-Davidson" },
    { value: "yamaha", label: "Yamaha" },
    { value: "ducati", label: "Ducati" },
    { value: "kawasaki", label: "Kawasaki" },
];

const TruckBrands: CarMenuOption[] = [
    { value: "volvo", label: "Volvo" },
    { value: "scania", label: "Scania" },
    { value: "man", label: "MAN" },
    { value: "iveco", label: "Iveco" },
    { value: "daf", label: "DAF" },
];

const BusBrands: CarMenuOption[] = [
    { value: "neoplan", label: "Neoplan" },
    { value: "ford", label: "Ford" },
    { value: "renault", label: "Renault" },
];

const MotorhomeBrands: CarMenuOption[] = [
    { value: "hobby", label: "Hobby" },
    { value: "iveco", label: "Iveco" },
];

const Brands = {
    cars: CarBrands,
    motorcycles: MotorcycleBrands,
    trucks: TruckBrands,
    buses: BusBrands,
    motorhomes: MotorhomeBrands,
};

export default Brands;
