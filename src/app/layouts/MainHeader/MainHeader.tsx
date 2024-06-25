import Button from "@/app/ui/Button";
import { IoHome, IoMenu } from "react-icons/io5";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <section className={styles.wrapperHeaderContent}>
                <div style={{ width: "33%" }}>
                    <Button text={"Меню"} />
                </div>
                <a href="/" style={{ padding: "12px" }}>
                    <IoHome className={styles.iconHomePage} />
                </a>
                <div className={styles.wrapperButtonsLogin}>
                    <Button text={"Вход"} />
                    <Button text={"Регистрация"} />
                </div>
            </section>
            <button className={styles.menuMobileButton}>
                <IoMenu className={styles.menuMobileButtonIcon} />
            </button>
        </header>
    );
};

export default MainHeader;
