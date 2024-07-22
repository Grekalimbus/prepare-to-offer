"use client";
import NavBar from "@/frontend/modules/navBar/NavBar";
import TanStackProvider from "@/frontend/Providers/TanStackProvider";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <main className={styles.layout}>
                <NextTopLoader />
                <TanStackProvider>
                    <MainHeader />
                    {children}
                    <MainFooter />
                    <NavBar />
                </TanStackProvider>
            </main>
            <div id="modals"></div>
        </>
    );
};

export default MainLayout;
