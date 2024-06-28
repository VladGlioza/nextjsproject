"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-96 justify-center items-center">
            <span className="text-[50px] font-semibold">404</span>
            <span>Сторінку не знайдено.</span>
            <Button onClick={() => router.back()} className="w-fit" type="link">
                Повернутись назад
            </Button>
        </div>
    );
}
