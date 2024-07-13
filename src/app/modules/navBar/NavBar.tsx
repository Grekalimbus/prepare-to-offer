"use client";
import Link from "next/link";
import { useContext, useEffect } from "react";
import styles from "./NavBar.module.css";
import { NavigationContext } from "./NavigationContext";
import AdminButton from "./components/AdminButton";

import { usePathname } from "next/navigation";
import CompaniesButton from "./components/CompaniesButton";
import LoginAndLogOutButton from "./components/LoginAndLogOutButton";
import PolicyButton from "./components/PolicyButton";

const NavBar = () => {
    const path = usePathname();
    const { isNavigationActive, setIsNavigationActive } = useContext(NavigationContext);
    useEffect(() => {
        setIsNavigationActive(false);
    }, [path]);
    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!isNavigationActive ? styles.hidden : styles.show}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <AdminButton />
                        <Link href="/questionsPage/allQuestions" className={styles.navLink}>
                            Технические вопросы
                        </Link>
                        <CompaniesButton />

                        <PolicyButton />
                        <LoginAndLogOutButton />
                    </div>
                    <button className={styles.buttonHide} onClick={() => setIsNavigationActive(prev => !prev)}>
                        Скрыть
                    </button>
                </nav>
            </aside>
            <div className={`${isNavigationActive && styles.shadowBlock}`}></div>
        </>
    );
};

export default NavBar;
