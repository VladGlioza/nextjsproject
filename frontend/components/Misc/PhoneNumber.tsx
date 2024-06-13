"use client";

import React, { useState } from "react";
import { Button } from "antd";
import {
    formatHiddenPhoneNumber,
    formatPhoneNumberWithAreaCode,
} from "@/utils/formatValues";

export const PhoneNumber = ({ phoneNumber }: { phoneNumber: string }) => {
    const [showPhone, setShowPhone] = useState<boolean>(false);

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
