import { UploadImageForm } from "@/components/Forms/UploadImageForm";

export default async function UploadSaleImage({
    params,
}: {
    params: { id: string };
}) {
    return (
        <div className="flex flex-col mt-[15px]">
            <UploadImageForm saleId={params.id} />
        </div>
    );
}
