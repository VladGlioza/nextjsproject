import Image from "next/image";

export const UserCart = ({ userName }: { userName: string }) => {
    return (
        <div className="flex flex-row items-center px-9 py-2 my-4 bg-orange-100 rounded drop-shadow-2xl">
            <Image
                className="w-[35px] h-[35px] mr-[7px]"
                src={"/icons/userprofile.png"}
                alt="user profile"
                width={35}
                height={35}
            />
            <div className="flex flex-col">
                <span className="text-[14px]">Продавець</span>
                <span className="font-semibold text-cyan-700">{userName}</span>
            </div>
        </div>
    );
};
