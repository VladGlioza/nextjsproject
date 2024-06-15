"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "antd";

export const GoogleAuth = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    return (
        <div onClick={() => signIn("google", { callbackUrl })}>
            <Button color="">
                Увійти через
                <Image
                    width={20}
                    height={20}
                    src={"/icons/google.svg"}
                    alt="google"
                />
                Google
            </Button>
        </div>
    );
};
