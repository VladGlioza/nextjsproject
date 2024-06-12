"use client";

import Image from "next/image";

export const PageLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-96">
            <Image src={"/loader.svg"} alt="loader" width={100} height={100} />
            <span>Завантаження</span>
        </div>
    );
};
