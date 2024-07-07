"use client";
import { useState } from "react";
import { PiSlideshowLight } from "react-icons/pi";
import ButtonHide from "../../ui/Buttons/ButtonHide";
import styles from "../QuestionsPage.module.css";

const QuestionsNavBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [activeTech, setActiveTech] = useState<string>("React");

    const technologies: string[] = [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Redux",
        "Архитектура",
        "Общие вопросы",
    ];

    const handleTechClick = (technology: string) => {
        setActiveTech(technology);
    };

    return isVisible ? (
        <div className={styles.wrapperNavBar}>
            <div className={styles.navBar}>
                <div className={styles.containerButtons}>
                    {technologies.map(technology => (
                        <button
                            key={technology}
                            className={`${styles.interviewButton} ${technology === activeTech ? styles.active : ""}`}
                            onClick={() => handleTechClick(technology)}
                        >
                            {technology}
                        </button>
                    ))}
                </div>
                <ButtonHide text="Скрыть" onClick={() => setIsVisible(!isVisible)} />
            </div>
        </div>
    ) : (
        <div className={styles.slideshowContainer}>
            <PiSlideshowLight className={styles.slideshowButton} onClick={() => setIsVisible(!isVisible)} />
        </div>
    );
};

export default QuestionsNavBar;
