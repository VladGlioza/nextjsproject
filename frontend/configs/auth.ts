import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import jwt_decode, { JwtPayload } from "jwt-decode";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Credentials({
            credentials: {
                username: { label: "username", type: "text", required: true },
                password: {
                    label: "password",
                    type: "password",
                    required: true,
                },
            },
            async authorize(credentials) {
                const response = await fetch(`${process.env.API_URL}/login/`, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                });
                const data = await response.json();

                if (response.ok && data) {
                    const accessToken = data.access;
                    const decodedToken: JwtPayload = jwt_decode(accessToken);
                    const expiresIn = decodedToken.exp;

                    const user = {
                        ...data,
                        expires: expiresIn,
                    };

                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "google" && account?.access_token) {
                const response = await fetch(
                    `${process.env.API_URL}/google-auth/`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            access_token: account.access_token,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                const data = await response.json();
                if (response.ok && data) {
                    const decodedToken: JwtPayload = jwt_decode(data.access);
                    const expiresIn = decodedToken.exp;
                    token.access = data.access;
                    token.refresh = data.refresh;
                    token.expires = expiresIn;
                }
                return token;
            } else {
                const dateNowInSeconds = new Date().getTime() / 1000;
                const tokenExpireIn =
                    user === undefined ? token.expires : user.expires;
                const tokenIsNotExpired = dateNowInSeconds < tokenExpireIn;

                if (tokenIsNotExpired) {
                    return { ...token, ...user };
                } else {
                    const response = await fetch(
                        `${process.env.API_URL}/user/token/refresh/`,
                        {
                            method: "POST",
                            body: JSON.stringify({ refresh: token.refresh }),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    const data = await response.json();
                    const decodedToken: JwtPayload = jwt_decode(data.access);
                    const expiresIn = decodedToken.exp;

                    token.access = data.access;
                    token.expires = expiresIn;

                    return { ...token, ...user };
                }
            }
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
};
