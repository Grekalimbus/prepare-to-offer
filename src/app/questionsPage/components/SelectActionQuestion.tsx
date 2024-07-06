"use client";
import styles from "../QuestionsPage.module.css";

import { useState } from "react";

const SelectActionQuestion = () => {
    const [isActive, setIsActive] = useState("Вопросы для всех");
    const buttons: string[] = ["Добавить новый вопрос", "Вопросы для всех", "мои вопросы"];

    return (
        <section className={styles.selectCategoryButton}>
            {buttons.map((text: string) => (
                <button
                    key={text}
                    onClick={() => setIsActive(text)}
                    className={`${styles.categoryButton} ${text === isActive ? styles.active : ""}`}
                >
                    {text}
                </button>
            ))}
        </section>
    );
};

export default SelectActionQuestion;
