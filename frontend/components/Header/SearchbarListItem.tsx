import { ReactNode } from "react";

export const SearchbarListItem = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                borderBottom: "1px solid black",
                filter: "drop-shadow(2px 4px 6px black)",
            }}
            className="relative flex justify-center z-10 w-full py-3 text-[14px] bg-white"
        >
            <div className="w-[95%]">{children}</div>
        </div>
    );
};
