"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import authSchema from "@/validators/signinValidator";
import { Input } from "../UI/Input";
import { Button } from "antd";
import styles from "@/styles/signin.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GoogleAuth } from "./GoogleAuth";
import { motion } from "framer-motion";

const AuthForm = () => {
    const router = useRouter();
    const [isSignIn, setIsSignIn] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function handleFormSubmit(values: any) {
        if (isSignIn) {
            const response = await signIn("credentials", {
                redirect: false,
                username: values.username,
                password: values.password,
            });
            return response;
        } else {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/register/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                }
            );
            const data = await response.json();
            return {
                ok: response.ok,
                status: response.status,
                data,
            };
        }
    }

    const { handleSubmit, handleChange, values, errors, resetForm } = useFormik(
        {
            initialValues: {
                username: "",
                password: "",
            },
            validationSchema: authSchema,
            onSubmit: (values) => {
                setError(null);
                handleFormSubmit(values).then((res) => {
                    if (res && !res.ok) {
                        setError(
                            //@ts-ignore
                            res.data?.error || "Невірний логін або пароль"
                        );
                    } else {
                        if (!isSignIn) {
                            signIn("credentials", {
                                redirect: false,
                                username: values.username,
                                password: values.password,
                            });
                        }
                        router.push("/");
                    }
                });
            },
        }
    );

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
        resetForm();
        setError(null);
    };

    return (
        <div className="flex flex-col items-center">
            <span className="text-[35px] font-semibold">
                {isSignIn ? "Авторизація" : "Реєстрація"}
            </span>

            <motion.form
                key={isSignIn ? "signIn" : "signUp"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <Input
                    className="border-[2px] border-sky-700"
                    placeholder="Логін"
                    name="username"
                    label="Ім'я користувача"
                    required
                    value={values.username}
                    onChange={handleChange}
                    error={errors.username}
                />
                <Input
                    className="border-[2px] border-sky-700"
                    name="password"
                    placeholder="Пароль"
                    label="Пароль"
                    required
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                    type="password"
                />
                <div
                    className="text-[14px] text-red-500 text-center"
                    style={{
                        opacity: `${error ? 1 : 0}`,
                        transition: "ease-in-out 0.3s",
                    }}
                >
                    {error}
                </div>
                <div className={styles.buttons}>
                    <Button type="primary" htmlType="submit">
                        {isSignIn ? "Увійти" : "Зареєструватися"}
                    </Button>
                    {isSignIn && <GoogleAuth />}
                </div>
                <span className={styles.register}>
                    {isSignIn ? (
                        <>
                            Ще немає акаунту?{" "}
                            <button
                                type="button"
                                onClick={toggleForm}
                                className="text-blue-500 underline"
                            >
                                Реєстрація
                            </button>
                        </>
                    ) : (
                        <>
                            Вже маєте акаунт?{" "}
                            <button
                                type="button"
                                onClick={toggleForm}
                                className="text-blue-500 underline"
                            >
                                Авторизація
                            </button>
                        </>
                    )}
                </span>
            </motion.form>
        </div>
    );
};

export default AuthForm;
