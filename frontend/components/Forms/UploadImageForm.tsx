"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, message } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const UploadImageForm = ({ saleId }: { saleId: string }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const { data: session } = useSession();

    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!image) return;

        const formData = new FormData();
        formData.append("sale_id", saleId);
        formData.append("image", image);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/market/upload-vehicle-image/`,
                {
                    headers: {
                        Authorization: `Bearer ${session?.user.access}`,
                    },
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                messageApi.open({
                    type: "success",
                    content: "Завантажили фото",
                });
                router.push(`/sale/${saleId}`);
            } else {
                messageApi.open({
                    type: "error",
                    content: "Помилка при завантаженні фото",
                });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            {contextHolder}
            <input
                className="my-2.5"
                type="file"
                onChange={handleImageChange}
                required
            />

            <Button type="primary" className="w-fit" htmlType="submit">
                Завантажити
            </Button>
        </form>
    );
};
