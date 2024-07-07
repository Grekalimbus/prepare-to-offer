import ModalAuth from "@/app/components/modalWindow/ModalAuth/ModalAuth";
import { ModalAuthProvider } from "@/app/components/modalWindow/ModalAuth/ModalAuthContext";
import ModalPolicy from "@/app/components/modalWindow/modalPolicy/ModalPolicy";
import { ModalPolicyProvider } from "@/app/components/modalWindow/modalPolicy/ModalPolicyContext";
import NavBar from "@/app/modules/navBar/NavBar";
import { NavigationProvider } from "@/app/modules/navBar/NavigationContext";
import Provider from "@/app/Provider";
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
            <Provider>
                <NavigationProvider>
                    <ModalAuthProvider>
                        <ModalPolicyProvider>
                            <MainHeader />
                            {children}
                            <MainFooter />
                            <NavBar />
                            <ModalAuth />
                            <ModalPolicy />
                        </ModalPolicyProvider>
                    </ModalAuthProvider>
                </NavigationProvider>
            </Provider>
        </main>
    );
};

export default MainLayout;
