import ModalAuth from "@/app/modules/ModalAuth/ModalAuth";
import { ModalAuthProvider } from "@/app/modules/ModalAuth/ModalAuthContext";
import NavBar from "@/app/modules/navBar/NavBar";
import { NavigationProvider } from "@/app/modules/navBar/NavigationContext";
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
            <NavigationProvider>
                <ModalAuthProvider>
                    <MainHeader />
                    {children}
                    <MainFooter />
                    <NavBar />
                    <ModalAuth />
                </ModalAuthProvider>
            </NavigationProvider>
        </main>
    );
};

export default MainLayout;
