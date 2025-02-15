"use client";

import { Button } from "antd";
import { signOut } from "next-auth/react";

export const SignOutBtn = () => {
    return (
        <div className="my-4">
            <Button
                size="large"
                onClick={() => signOut()}
                type="primary"
                danger
            >
                Вийти з акаунту
            </Button>
        </div>
    );
};
