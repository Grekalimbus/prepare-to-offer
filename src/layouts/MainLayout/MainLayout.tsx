"use client";
import Loader from "@/components/loader/Loader";
import { LoaderProvider } from "@/components/loader/LoaderContext";
import ModalAuth from "@/components/modalWindow/ModalAuth/ModalAuth";
import ModalPolicy from "@/components/modalWindow/modalPolicy/ModalPolicy";
import { CustomNavBarProvider } from "@/modules/customNavBar/CustomNavBarContext";
import NavBar from "@/modules/navBar/NavBar";
import Provider from "@/Providers/Provider";
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
        <main className={styles.layout}>
            <NextTopLoader />
            <Provider>
                <LoaderProvider>
                    <Loader />
                    <CustomNavBarProvider>
                        <MainHeader />
                        {children}
                        <MainFooter />
                        <NavBar />
                        <ModalAuth />
                        <ModalPolicy />
                    </CustomNavBarProvider>
                </LoaderProvider>
            </Provider>
        </main>
    );
};

export default MainLayout;
