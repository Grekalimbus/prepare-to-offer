"use client";
import Loader from "@/components/loader/Loader";
import ModalAuth from "@/components/modalWindow/ModalAuth/ModalAuth";
import ModalPolicy from "@/components/modalWindow/modalPolicy/ModalPolicy";
import NavBar from "@/frontend/modules/navBar/NavBar";
import Provider from "@/frontend/Providers/Provider";
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
                <Loader />
                <MainHeader />
                {children}
                <MainFooter />
                <NavBar />
                <ModalAuth />
                <ModalPolicy />
            </Provider>
        </main>
    );
};

export default MainLayout;
