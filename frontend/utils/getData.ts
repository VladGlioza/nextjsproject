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

export async function getProtectedData(
    apiRoute: string,
    accessToken: string | undefined
) {
    "use server";

    const response = await fetch(`${process.env.API_URL}${apiRoute}`, {
        cache: "no-store",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.json();
}
