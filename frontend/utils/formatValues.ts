export function formatMileage(mileage: number): string {
    if (mileage < 1000) {
        return "Без пробігу";
    }
    const mileageInThousands = Math.floor(mileage / 1000);
    return `${mileageInThousands} тис. км`;
}

export function formatRegion(regionCode: string): string {
    const regionMap: { [key: string]: string } = {
        ZH: "Житомир",
        KY: "Київ",
        VI: "Вінниця",
    };

    return regionMap[regionCode.toUpperCase()] || "Невідомий регіон";
}
