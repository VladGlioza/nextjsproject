"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export const AddSaleBtn = () => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push("/sale/add")}
            className="w-fit"
            type="primary"
        >
            Додати оголошення
        </Button>
    );
};
