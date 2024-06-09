import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ua">
            <body className={publicSans.className}>
                <AntdRegistry>
                    <Header />
                    {children}
                </AntdRegistry>
            </body>
        </html>
    );
}
