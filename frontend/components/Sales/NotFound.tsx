import Image from "next/image";

export const NotFound = () => {
    return (
        <div className="flex flex-col w-full h-96 justify-center items-center">
            <Image src="/icons/not found.png" alt="nf" width={50} height={50} />
            <span className="font-semibold">
                На даний момент немає оголошень за вашим запитом.
            </span>
            <span>Можливо, варто зменшити кількість параметрів.</span>
        </div>
    );
};
