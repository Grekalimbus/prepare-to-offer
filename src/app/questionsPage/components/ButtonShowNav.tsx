"use client";
import { PiSlideshowFill } from "react-icons/pi";
import styles from "../QuestionsPage.module.css";

const ButtonShowNav = () => {
    const handleHideNav = () => {
        const nav = document.querySelector("#tecnhologiesNavBar") as HTMLElement;
        nav.style.display = "flex";
    };
    return <PiSlideshowFill onClick={handleHideNav} className={styles.slideshowButton} />;
};

export default ButtonShowNav;
