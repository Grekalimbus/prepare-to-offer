"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./NavBar.module.css";
import AdminButton from "./components/AdminButton";

import { useNavBar } from "@/app/store";
import { usePathname } from "next/navigation";
import LoginAndLogOutButton from "./components/LoginAndLogOutButton";
import PolicyButton from "./components/PolicyButton";

const NavBar = () => {
    const path = usePathname();
    const { isNavBar, setIsNavBar } = useNavBar();

    useEffect(() => {
        setIsNavBar(false);
    }, [path]);
    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!isNavBar ? styles.hidden : styles.show}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <AdminButton />
                        <Link href="/questionsPage/allQuestions" className={styles.navLink}>
                            Технические вопросы
                        </Link>
                        {/* <CompaniesButton /> */}

                        <PolicyButton />
                        <LoginAndLogOutButton />
                    </div>
                    <button className={styles.buttonHide} onClick={() => setIsNavBar()}>
                        Скрыть
                    </button>
                </nav>
            </aside>
            <div className={`${isNavBar && styles.shadowBlock}`}></div>
        </>
    );
};

export default NavBar;
