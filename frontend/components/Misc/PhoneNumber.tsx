"use client";

import React, { useState } from "react";
import { Button } from "antd";
import {
    formatHiddenPhoneNumber,
    formatPhoneNumberWithAreaCode,
} from "@/utils/formatValues";

export const PhoneNumber = ({
    phoneNumber,
}: {
    phoneNumber: string | null;
}) => {
    const [showPhone, setShowPhone] = useState<boolean>(false);

    if (!phoneNumber) return;

    return (
        <Button size="large" onClick={() => setShowPhone(!showPhone)}>
            <span className="text-[19px] font-bold text-green-700">
                {showPhone ? (
                    <>{formatPhoneNumberWithAreaCode(phoneNumber)}</>
                ) : (
                    <>{formatHiddenPhoneNumber(phoneNumber)}</>
                )}
            </span>
        </Button>
    );
};
