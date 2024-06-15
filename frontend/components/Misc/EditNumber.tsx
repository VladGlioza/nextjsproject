"use client";

import { EditOutlined } from "@ant-design/icons";
import { Input } from "../UI/Input";
import { useFormik } from "formik";
import editPhoneNumberSchema from "@/validators/profile";
import { useState, useRef } from "react";
import { Modal } from "./Modal";
import { Button } from "antd";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ErrorSpan } from "./ErrorSpan";
import { LoadingOutlined } from "@ant-design/icons";

export const EditNumber = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

    const { data: session } = useSession();
    const router = useRouter();

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetForm();
    };

    const modalRef = useRef<HTMLDivElement>(null);
    useOutsideClick(modalRef, () => handleCloseModal());

    async function handleFormSubmit(values: any) {
        setLoading(true);
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/edit-number/${values.phoneNumber}/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user.access}`,
                },
                method: "POST",
                body: JSON.stringify(values),
            }
        );
        const data = await response.json();
        setLoading(false);
        return {
            ok: response.ok,
            status: response.status,
            data,
        };
    }

    const { handleSubmit, handleChange, values, errors, resetForm } = useFormik(
        {
            initialValues: {
                phoneNumber: "",
            },
            validationSchema: editPhoneNumberSchema,
            onSubmit: (values) => {
                setError(null);
                handleFormSubmit(values).then((res) => {
                    if (res && !res.ok) {
                        setError(
                            //@ts-ignore
                            res.data?.error ||
                                "Виникла помилка при редагуванні номера"
                        );
                    } else {
                        router.refresh();
                    }
                });
            },
        }
    );

    return (
        <>
            <Modal ref={modalRef} show={showModal} onClose={handleCloseModal}>
                <span className="font-semibold mb-[10px]">
                    Вкажіть номер телефону
                </span>
                <form onSubmit={handleSubmit}>
                    <Input
                        className="border-[2px] border-sky-500"
                        name="phoneNumber"
                        placeholder="Номер телефону"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        label="Номер телефону"
                        required
                    />
                    <ErrorSpan error={error} />
                    <div>
                        <Button
                            htmlType="submit"
                            type="primary"
                            size="large"
                            className="mt-[10px]"
                            disabled={loading}
                        >
                            Редагувати
                            {loading && <LoadingOutlined />}
                        </Button>
                    </div>
                </form>
            </Modal>
            <button onClick={handleOpenModal} className="ml-[4px]">
                <EditOutlined />
            </button>
        </>
    );
};
