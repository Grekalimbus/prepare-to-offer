"use client";
import ButtonHide from "@/app/ui/Buttons/ButtonHide";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import styles from "./NavBar.module.css";
import { NavigationContext } from "./NavigationContext";
import AdminButton from "./components/AdminButton";
import CompaniesButton from "./components/CompaniesButton";
import LoginAndLogOutButton from "./components/LoginAndLogOutButton";
import PolicyButton from "./components/PolicyButton";

const NavBar = () => {
    const session = useSession();
    const { isNavigationActive, setIsNavigationActive } = useContext(NavigationContext);

    const path = usePathname();
    useEffect(() => {
        setIsNavigationActive(false);
    }, [path]);

    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!isNavigationActive ? styles.hidden : ""}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <Link href="/questionsPage" className={styles.navLink}>
                            Технические вопросы
                        </Link>
                        <AdminButton email={session.data?.user?.email} />
                        <CompaniesButton />
                        <Link href="/" className={styles.navLink}>
                            Задачи с собеседований
                        </Link>
                        <Link href="/" className={styles.navLink}>
                            Вопросы от кадидата
                        </Link>
                        <Link href="/" className={styles.navLink}>
                            Служба поддержки
                        </Link>
                        <PolicyButton />
                        <LoginAndLogOutButton />
                    </div>
                    <ButtonHide text="Скрыть" onClick={() => setIsNavigationActive(prev => !prev)} />
                </nav>
            </aside>
            <div style={{ display: `${isNavigationActive ? "block" : "none"}` }} className={styles.shadowBlock}></div>
        </>
    );
};

export default NavBar;
