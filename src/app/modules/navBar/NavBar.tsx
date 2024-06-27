"use client";
import ButtonHide from "@/app/ui/Buttons/ButtonHide";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useContext, useEffect } from "react";
import { ModalAuthContext } from "../ModalAuth/ModalAuthContext";
import styles from "./NavBar.module.css";
import { NavigationContext } from "./NavigationContext";

const NavBar = () => {
    const session = useSession();
    const { isNavigationActive, setIsNavigationActive } = useContext(NavigationContext);
    const { setIsModalActive } = useContext(ModalAuthContext);
    const path = usePathname();
    const router = useRouter();
    useEffect(() => {
        setIsNavigationActive(prev => !prev);
    }, [path]);
    const handleRoutePushOrShowModal = (e: MouseEvent<HTMLButtonElement>, url: string) => {
        if (!session.data) {
            e.preventDefault();
            setIsModalActive(true);
        } else {
            router.push(url);
        }
    };

    console.log("session", session);
    return (
        <>
            <aside className={`${styles.wrapperNavBar} ${!isNavigationActive ? styles.hidden : ""}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <button onClick={e => handleRoutePushOrShowModal(e, "/test")} className={styles.navLink}>
                            Технические вопросы
                        </button>
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
                        {session?.data ? (
                            <button onClick={() => signOut({ callbackUrl: "/" })} className={styles.navLink}>
                                Выход
                            </button>
                        ) : (
                            <Link href="/api/auth/signin" className={styles.navLink}>
                                Вход / Регистрация
                            </Link>
                        )}
                    </div>
                    <ButtonHide text="Скрыть" onClick={() => setIsNavigationActive(prev => !prev)}></ButtonHide>
                </nav>
            </aside>
            <div style={{ display: `${isNavigationActive ? "block" : "none"}` }} className={styles.shadowBlock}></div>
        </>
    );
};

export default NavBar;
