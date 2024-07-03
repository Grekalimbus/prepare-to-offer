import { useState } from "react";
import styles from "../Admin.module.css";
const SelectCategoryButtons = () => {
    const [isActive, setIsActive] = useState<string>("Технические вопросы");
    const buttons: string[] = ["Компании", "Технические вопросы", "Вопросы от кандидата"];
    return (
        <section className={styles.selectCategoryButtons}>
            {buttons.map((text: string) => {
                return (
                    <button
                        onClick={() => setIsActive(text)}
                        className={`${styles.categoryButton} ${text === isActive ? styles.active : ""}`}
                    >
                        {text}
                    </button>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
