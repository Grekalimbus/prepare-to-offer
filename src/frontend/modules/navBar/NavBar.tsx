"use client";
import { useNavBar } from "@/app/store";
import ModalPolicy from "@/frontend/shared/components/modalWindow/modalPolicy/ModalPolicy";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import AdminButton from "./components/AdminButton";
import LoginAndLogOutButton from "./components/LoginAndLogOutButton";

const NavBar = () => {
    const path = usePathname();
    const { isNavBar, setIsNavBar } = useNavBar();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsNavBar(false);
    }, [path]);
    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!isNavBar ? styles.hidden : styles.show}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <AdminButton />
                        <Link href="/company/allCompany" className={styles.navLink}>
                            Компании
                        </Link>
                        <Link href="/questionsPage/allQuestions" className={styles.navLink}>
                            Технические вопросы
                        </Link>
                        <button className={styles.navLink} onClick={() => setIsOpen(true)}>
                            Политика конфиденциальности
                        </button>
                        <LoginAndLogOutButton />
                    </div>
                    <button className={styles.buttonHide} onClick={() => setIsNavBar()}>
                        Скрыть
                    </button>
                </nav>
            </aside>
            <div className={`${isNavBar && styles.shadowBlock}`}></div>
            <ModalPolicy isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default NavBar;
