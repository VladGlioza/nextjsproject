"use client";

import { Button } from "antd";
import { signOut } from "next-auth/react";

export const SignOutBtn = () => {
    return (
        <Button onClick={() => signOut()} type="primary" danger>
            Вийти з акаунту
        </Button>
    );
};
