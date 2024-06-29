import { getProtectedData } from "@/utils/getData";
import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import AddSaleForm from "@/components/Forms/AddSaleForm";

export default async function AddNewSale() {
    const session = await getServerSession(authConfig);
    const data = await getProtectedData(
        `/market/get-add-sale-data/`,
        session?.user.access
    );

    return (
        <div className="flex flex-col mt-[15px] tabular-nums">
            <AddSaleForm />
        </div>
    );
}
