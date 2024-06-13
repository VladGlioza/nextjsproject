export const VinCode = ({ code }: { code: string }) => {
    const colorStyle = code ? "sky" : "orange";

    return (
        <div
            style={{ borderColor: code ? "blue" : "orange" }}
            className={`my-2 flex flex-row items-center border-2`}
        >
            <span
                className={`flex justify-center w-[25%] h-full  bg-${colorStyle}-700 text-white font-semibold`}
            >
                VIN
            </span>
            <span className="flex items-center justify-center w-[75%] h-full text-[13px] text-nowrap font-semibold">
                {code ? code : "Не надано"}
            </span>
        </div>
    );
};
