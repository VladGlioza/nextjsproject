import { getDataFromAPI } from "@/utils/getData";

export default async function MainPage() {
    const data = await getDataFromAPI("/market/latest-sales/");

    return <></>;
}
