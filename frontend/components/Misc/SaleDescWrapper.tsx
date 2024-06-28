export const SaleDescWrapper = ({
    children,
    queue,
    label,
}: {
    children: React.ReactNode;
    queue: number;
    label: string;
}) => {
    return (
        <div className="flex flex-col my-1.5">
            <div className="font-semibold text-[20px]">
                <span className="bg-gray-500 rounded-full text-white py-0.5 px-2">
                    {queue}
                </span>{" "}
                {label}
            </div>
            <div className="py-4 mx-8 flex flex-col w-[44%]">{children}</div>
        </div>
    );
};
