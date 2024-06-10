"use client";

import { useState } from "react";
import { Logo } from "../Logo";
import { Input } from "../UI/Input";
import Link from "next/link";
import Image from "next/image";

export const Searchbar = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-row items-center py-6 justify-between w-full">
            <Logo />
            <Input
                name="searchbar"
                onChange={handleOnChange}
                value={inputValue}
                placeholder="Пошук.."
                containerClass="w-[50%]"
            />
            <div className="flex flex-row justify-between">
                <Link href="/favourites">
                    <Image
                        src={"/icons/Heart.png"}
                        width={32}
                        height={32}
                        alt="heart"
                    />
                </Link>
                <Link href="/profile" className="ml-[15px]">
                    <Image
                        src={"/icons/User.png"}
                        width={32}
                        height={32}
                        alt="User"
                    />
                </Link>
            </div>
        </div>
    );
};
