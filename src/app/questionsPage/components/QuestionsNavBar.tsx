import { useState } from "react";
import { PiSlideshowLight } from "react-icons/pi";
import ButtonHide from "../../ui/Buttons/ButtonHide";
import styles from "../QuestionsPage.module.css";

interface Props {
    technologies: string[];
    setActiveTech: (value: string) => void;
    activeTech: string;
}

const QuestionsNavBar = ({ technologies, setActiveTech, activeTech }: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    return isVisible ? (
        <div className={styles.wrapperNavBar}>
            <div className={styles.navBar}>
                <div className={styles.containerButtons}>
                    {technologies.map(technology => (
                        <button
                            key={technology}
                            className={`${styles.interviewButton} ${technology === activeTech ? styles.active : ""}`}
                            onClick={() => setActiveTech(technology)}
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
