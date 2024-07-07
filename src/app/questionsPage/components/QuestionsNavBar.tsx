"use client";
import { useState } from "react";
import { PiSlideshowLight } from "react-icons/pi";
import ButtonHide from "../../ui/Buttons/ButtonHide";
import styles from "../QuestionsPage.module.css";

const QuestionsNavBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [activeTech, setActiveTech] = useState<string>("Вопросы от кандидата");

    const technologies: string[] = [
        "Вопросы от кандидата",
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Next.js",
        "Архитектура",
        "Redux",
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
