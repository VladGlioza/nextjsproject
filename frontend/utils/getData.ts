import { notFound } from "next/navigation";

export async function getDataFromAPI(apiRoute: string) {
    "use server";

    const response = await fetch(`${process.env.API_URL}${apiRoute}`, {
        cache: "no-store",
    });

    if (response.status == 404) {
        return notFound();
    }

    return response.json();
}
