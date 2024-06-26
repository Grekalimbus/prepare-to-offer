"use client";
import ButtonHide from "@/app/ui/Buttons/ButtonHide";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import styles from "./NavBar.module.css";
import { NavigationContext } from "./NavigationContext";

const NavBar = () => {
    const session = useSession();
    const { isNavigationActive, setIsNavigationActive } = useContext(NavigationContext);
    const router = usePathname();
    useEffect(() => {
        setIsNavigationActive(prev => !prev);
    }, [router]);

    console.log("session", session);
    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!isNavigationActive ? styles.hidden : ""}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <Link href={"/"} className={styles.navLink}>
                            Технические вопросы
                        </Link>
                        <Link href={"/"} className={styles.navLink}>
                            Информация о компаниях
                        </Link>
                        <Link href={"/"} className={styles.navLink}>
                            Задачи с собеседований
                        </Link>
                        <Link href={"/"} className={styles.navLink}>
                            Вопросы от кадидата
                        </Link>
                        <Link href={"/"} className={styles.navLink}>
                            Служба поддержки
                        </Link>
                        <Link href={"/"} className={styles.navLink}>
                            Политика конфиденциальности
                        </Link>
                        <Link href={"/"} className={styles.navLink}>
                            Вход / Регистрация
                        </Link>
                    </div>
                    <ButtonHide text="Скрыть" onClick={() => setIsNavigationActive(prev => !prev)}></ButtonHide>
                </nav>
            </aside>
            <div style={{ display: `${isNavigationActive ? "block" : "none"}` }} className={styles.shadowBlock}></div>
        </>
    );
};

export default NavBar;
{
    /* <div style={{ display: "flex", justifyContent: "space-between" }}>
<Link href="/">Home</Link>
<Link href="/authPage">Auth</Link>
{session?.data && <Link href="/profile">Profile</Link>}
{session?.data ? (
    <Link href="/" onClick={() => signOut({ callbackUrl: "/" })}>
        signOut
    </Link>
) : (
    <Link href="/api/auth/signin">signIn</Link>
)}
</div> */
}
