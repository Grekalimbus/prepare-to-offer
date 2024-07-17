"use client";
import { useNavBar } from "@/app/store";
import useUser from "@/frontend/domains/user/useUser";
import ModalPolicy from "@/frontend/shared/components/modalWindow/modalPolicy/ModalPolicy";
import NavLink from "@/frontend/ui/Buttons/NavLink/NavLink";
import ButtonInNav from "@/frontend/ui/Buttons/buttonInNav/ButtonInNav";
import Hide from "@/frontend/ui/Buttons/hide/Hide";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import LoginAndLogOutButton from "./components/LoginAndLogOutButton";

const NavBar = () => {
    const path = usePathname();
    const { isAdmin } = useUser();
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
                        {isAdmin && <NavLink href="/adminPage" text="Админка" />}
                        <NavLink href="/company/allCompany" text="Компании" />
                        <NavLink href="/questionsPage/allQuestions" text="Технические вопросы" />
                        <ButtonInNav text="Политика конфиденциальности" onClick={() => setIsOpen(true)} />
                        <LoginAndLogOutButton />
                    </div>
                    <Hide text="Скрыть" onClick={() => setIsNavBar()} />
                </nav>
            </aside>
            <div className={`${isNavBar && styles.shadowBlock}`}></div>
            <ModalPolicy isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default NavBar;
