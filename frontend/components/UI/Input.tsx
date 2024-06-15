import { InputProps } from "@/types/UI/InputProps";
import React from "react";

export const Input = ({
    name,
    label,
    error,
    required = false,
    containerClass,
    ...props
}: InputProps) => {
    return (
        <div className={"relative flex flex-col " + (containerClass || "")}>
            {error && (
                <div
                    className="text-[14px] text-red-500 text-center"
                    style={{
                        opacity: `${error ? 1 : 0}`,
                        transition: "ease-in-out 0.3s",
                    }}
                >
                    {error}
                </div>
            )}

            <input
                {...props}
                style={{ width: "100%" }}
                className={
                    `${props.className || ""}` +
                    " text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-sm py-3 pl-4 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
                }
                id={name}
                name={name}
            />
        </div>
    );
};
