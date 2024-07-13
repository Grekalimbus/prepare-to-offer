"use client";
import Loader from "@/app/components/loader/Loader";
import { LoaderProvider } from "@/app/components/loader/LoaderContext";
import ModalAuth from "@/app/components/modalWindow/ModalAuth/ModalAuth";
import { ModalAuthProvider } from "@/app/components/modalWindow/ModalAuth/ModalAuthContext";
import ModalPolicy from "@/app/components/modalWindow/modalPolicy/ModalPolicy";
import { ModalPolicyProvider } from "@/app/components/modalWindow/modalPolicy/ModalPolicyContext";
import { CustomNavBarProvider } from "@/app/modules/customNavBar/CustomNavBarContext";
import NavBar from "@/app/modules/navBar/NavBar";
import { NavigationProvider } from "@/app/modules/navBar/NavigationContext";
import Provider from "@/app/Provider";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
    children: ReactNode; // Протипизируем children как ReactNode
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className={styles.layout}>
            <NextTopLoader />
            <Provider>
                <NavigationProvider>
                    <ModalAuthProvider>
                        <LoaderProvider>
                            <Loader />
                            <ModalPolicyProvider>
                                <CustomNavBarProvider>
                                    <MainHeader />
                                    {children}
                                    <MainFooter />
                                    <NavBar />
                                    <ModalAuth />
                                    <ModalPolicy />
                                </CustomNavBarProvider>
                            </ModalPolicyProvider>
                        </LoaderProvider>
                    </ModalAuthProvider>
                </NavigationProvider>
            </Provider>
        </main>
    );
};

export default MainLayout;
