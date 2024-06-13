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
        VI: "Вінниця",
        KY: "Київ",
        VN: "Луцьк",
        DN: "Дніпро",
        DP: "Донецьк",
        IV: "Івано-Франківськ",
        KH: "Харків",
        KR: "Херсон",
        KM: "Хмельницький",
        CK: "Черкаси",
        CH: "Чернігів",
        CV: "Чернівці",
        KK: "Кропивницький",
        KV: "Київ",
        LH: "Луганськ",
        LV: "Львів",
        MK: "Миколаїв",
        OD: "Одеса",
        PL: "Полтава",
        RV: "Рівне",
        SC: "Суми",
        TP: "Тернопіль",
        ZC: "Ужгород",
        ZP: "Запоріжжя",
    };

    return regionMap[regionCode.toUpperCase()] || "Невідомий регіон";
}

export function formatPhoneNumberWithAreaCode(phoneNumber: string) {
    const areaCode = phoneNumber.slice(0, 3);
    const restOfNumber = phoneNumber.slice(3);
    return `(${areaCode}) ${restOfNumber.slice(0, 3)}-${restOfNumber.slice(
        3,
        5
    )}-${restOfNumber.slice(5)}`;
}

export function formatHiddenPhoneNumber(phoneNumber: string) {
    const areaCode = phoneNumber.slice(0, 3);
    const hiddenPart = phoneNumber.slice(3).replace(/\d/g, "x");
    return `(${areaCode}) ${hiddenPart.slice(0, 3)}-${hiddenPart.slice(
        3,
        5
    )}-${hiddenPart.slice(5)}`;
}
