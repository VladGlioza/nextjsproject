import { SignOutBtn } from "@/components/Misc/SignOutBtn";
import { authConfig } from "@/configs/auth";
import { IProfile } from "@/types/Profile";
import { getProtectedData } from "@/utils/getData";
import { getServerSession } from "next-auth";
import Image from "next/image";
import SalesList from "@/components/Sales/SalesList";
import { EditNumber } from "@/components/Misc/EditNumber";
import { formatPhoneNumberWithAreaCode } from "@/utils/formatValues";
import { AddSaleBtn } from "@/components/Misc/AddSaleBtn";

export default async function ProfilePage() {
    const session = await getServerSession(authConfig);
    const profileData: IProfile = await getProtectedData(
        "/get-profile/",
        session?.user.access
    );

    //@ts-ignore
    const userPic = session!.user.picture || "/icons/userprofile.png";

    const phoneNumber = profileData.account.phone_number;

    return (
        <div className="w-full flex flex-col items-center my-6">
            <div className="flex flex-col">
                <div className="w-full flex justify-center">
                    <Image
                        className="rounded-full"
                        src={userPic}
                        alt="user"
                        width={100}
                        height={100}
                    />
                </div>
                <span className="my-2">
                    <span className="font-semibold">Юзернейм:</span>{" "}
                    {profileData.account.name}
                </span>
                <span className="my-2">
                    <span className="font-semibold">Номер мобільного:</span>{" "}
                    {phoneNumber
                        ? formatPhoneNumberWithAreaCode(phoneNumber)
                        : "Не вказано"}
                    <EditNumber />
                </span>
                <SalesList saleItems={profileData.sales}>
                    <span className="my-2 font-semibold">Оголошення:</span>
                    <AddSaleBtn />
                    {profileData.sales.length == 0 && (
                        <div className="flex flex-col w-full my-5 justify-center items-center">
                            <Image
                                src="/icons/not found.png"
                                alt="nf"
                                width={50}
                                height={50}
                            />
                            <span className="mt-[4px]">
                                На даний момент у вас немає оголошень.
                            </span>
                        </div>
                    )}
                </SalesList>
                <SignOutBtn />
            </div>
        </div>
    );
}
