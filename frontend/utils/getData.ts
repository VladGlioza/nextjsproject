export async function getDataFromAPI(apiRoute: string) {
    "use server";

    const response = await fetch(`${process.env.API_URL}${apiRoute}`, {
        cache: "no-store",
    });

    return response.json();
}
