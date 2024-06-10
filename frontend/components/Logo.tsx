import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link className="flex flex-row items-center w-fit" href="/">
            <Image src={"/logo.png"} width={50} height={50} alt="logo" />
            <span className="font-bold text-4xl">
                <span className="text-orange-300">Auto</span>Board
            </span>
        </Link>
    );
};
