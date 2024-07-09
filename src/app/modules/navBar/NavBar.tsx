import Link from "next/link";
import styles from "./NavBar.module.css";
import AdminButton from "./components/AdminButton";
import ButtonHideMenu from "./components/ButtonHideMenu";
import CompaniesButton from "./components/CompaniesButton";
import LoginAndLogOutButton from "./components/LoginAndLogOutButton";
import PolicyButton from "./components/PolicyButton";

const NavBar = () => {
    return (
        <>
            <aside id="commonNavBar" className={`${styles.wrapperNavBar} ${styles.hidden}`}>
                <nav className={styles.navBar}>
                    <div className={styles.flexContainer}>
                        <AdminButton />
                        <Link href="/questionsPage/questions/React" className={styles.navLink}>
                            Технические вопросы
                        </Link>
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
                    <ButtonHideMenu />
                </nav>
            </aside>
            <div id="shadow" className={styles.shadowBlock}></div>
        </>
    );
};

export default NavBar;
