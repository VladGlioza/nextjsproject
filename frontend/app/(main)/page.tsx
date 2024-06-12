import { getDataFromAPI } from "@/utils/getData";
import SalesList from "@/components/Sales/SalesList";

export default async function MainPage() {
    const data = await getDataFromAPI("/market/latest-sales/");

    return <SalesList saleItems={data} />;
}
