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
    const { navBarState, setNavBarState } = useNavBar();

    useEffect(() => {
        setNavBarState(false);
    }, [path]);
    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!navBarState ? styles.hidden : styles.show}`}>
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
                    <button className={styles.buttonHide} onClick={() => setNavBarState()}>
                        Скрыть
                    </button>
                </nav>
            </aside>
            <div className={`${navBarState && styles.shadowBlock}`}></div>
        </>
    );
};

export default NavBar;
