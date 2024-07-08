"use client";
import { ModalAuthContext } from "@/app/components/modalWindow/ModalAuth/ModalAuthContext";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import styles from "../QuestionsPage.module.css";

const sections: string[] = ["Добавить новый вопрос", "Вопросы для всех", "мои вопросы"];

const SelectActionQuestion = () => {
    const [activeSection, setActiveSection] = useState("Вопросы для всех");
    const session = useSession();
    const { setIsModalActive } = useContext(ModalAuthContext);
    const handleChangeSection = (value: string) => {
        console.log("session.data", session.data);
        if (!session.data && value !== "Вопросы для всех") {
            setIsModalActive(prev => !prev);
        }
        if (session.data) {
            setActiveSection(value);
        }
    };
    return (
        <section className={styles.selectCategoryButton}>
            {sections.map((text: string) => (
                <button
                    key={text}
                    onClick={() => handleChangeSection(text)}
                    className={`${styles.categoryButton} ${text === activeSection ? styles.active : ""}`}
                >
                    {text}
                </button>
            ))}
        </section>
    );
};

export default SelectActionQuestion;
