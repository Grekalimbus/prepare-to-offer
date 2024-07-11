"use client";
import ButtonHide from "@/app/ui/Buttons/ButtonHide";
import { PiSlideshowFill } from "react-icons/pi";
import styles from "./CustomNavBar.module.css";
import useCustomNavBarHook from "./useCustomNavBarHook";

interface NavButton {
    text: string;
    value: string;
}

interface Props {
    arrayButtons: NavButton[];
    currentSection: { section: string; value: string };
}

const CustomNavBar = ({ currentSection, arrayButtons }: Props) => {
    const { activeSection, handleChangeSection } = useCustomNavBarHook({ currentSection });

    return (
        <>
            <aside className={styles.wrapperNavBar}>
                <div className={styles.navBar}>
                    <section className={styles.containerButtons}>
                        {arrayButtons.map(technology => (
                            <button
                                key={technology.value}
                                onClick={() => handleChangeSection(technology)}
                                className={`${styles.button} ${
                                    activeSection.value === technology.value && styles.active
                                }`}
                            >
                                {technology.text}
                            </button>
                        ))}
                    </section>
                    <ButtonHide text="Скрыть" />
                </div>
            </aside>
            <PiSlideshowFill className={styles.slideshowButton} />
        </>
    );
};

export default CustomNavBar;
