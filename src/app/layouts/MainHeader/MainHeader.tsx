"use client";
import { NavigationContext } from "@/app/modules/navBar/NavigationContext";
import Button from "@/app/ui/Buttons/Button";
import { useContext } from "react";
import { IoHome, IoMenu } from "react-icons/io5";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
    const { setIsNavigationActive } = useContext(NavigationContext);
    return (
        <header className={styles.header}>
            <section className={styles.wrapperHeaderContent}>
                <div style={{ width: "33%" }}>
                    <Button onClick={() => setIsNavigationActive(prev => !prev)} text={"Меню"} />
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
