import React from "react";

export const ErrorSpan = ({ error }: { error: string | null }) => {
    return (
        <div
            className="text-[14px] text-red-500 text-center"
            style={{
                opacity: `${error ? 1 : 0}`,
                transition: "ease-in-out 0.3s",
            }}
        >
            {error}
        </div>
    );
};
