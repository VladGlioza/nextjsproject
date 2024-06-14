export const VinCode = ({ code }: { code: string }) => {
    const colorStyle = code ? "#6c6cc1" : "orange";

    return (
        <div
            style={{ borderColor: colorStyle }}
            className={`my-2 flex flex-row items-center border-2`}
        >
            <span
                style={{
                    background: colorStyle,
                }}
                className={`flex justify-center text-white w-[25%] h-full font-semibold`}
            >
                VIN
            </span>
            <span className="flex items-center justify-center w-[75%] h-full text-[13px] text-nowrap font-semibold">
                {code ? code : "Не надано"}
            </span>
        </div>
    );
};
