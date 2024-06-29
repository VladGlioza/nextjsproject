"use client";

import { Button, Popconfirm, message } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const EditSaleBtns = ({ saleId }: { saleId: number }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const { data: session } = useSession();
    const router = useRouter();

    const confirm = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/market/${saleId}/delete/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user.access}`,
                },
                method: "POST",
            }
        );
        const data = await response.json();
        if (data.success) {
            router.push("/");
            messageApi.open({
                type: "success",
                content: data.success,
            });
        } else {
            messageApi.open({
                type: "error",
                content: data.error,
            });
        }
    };

    return (
        <div className="flex flex-row my-1.5 w-full justify-around">
            {contextHolder}
            <Button type="primary">Додати фото</Button>
            <Popconfirm
                title="Видалити оголошення"
                description="Ви впевнені, що хочете видалити це оголошення?"
                okText="Так"
                cancelText="Ні"
                onConfirm={confirm}
            >
                <Button type="primary" danger>
                    Видалити
                </Button>
            </Popconfirm>
        </div>
    );
};
