import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "../frontend/layouts/MainLayout/MainLayout";
import AuthProvider from "../frontend/Providers/AuthProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prepare to offer!",
    description:
        "Полная подготовка к собеседованиям. Список компаний с вопросами от интервьюера. Вопросы с собеседований на Frontend разработчика. Вопросы HTML / CSS / JS / TS / React / Redux и общие вопросы. Вопросы от кандидата. ",
    icons: { icon: "/favicon.ico?v=4" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className={inter.className}>
                <AuthProvider>
                    <MainLayout>{children}</MainLayout>
                </AuthProvider>
            </body>
        </html>
    );
}
