export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/profile", "/favourites", "/sale/add"],
};
