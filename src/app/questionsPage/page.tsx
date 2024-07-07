"use client";
import { Question } from "@/types/question/question";
import { useState } from "react";
import useGetSomeQuestions from "../hooks/useGetSomeQuestions";
import QuestionsCards from "../modules/questionsCards/QuestionsCards";
import styles from "./QuestionsPage.module.css";
import QuestionsNavBar from "./components/QuestionsNavBar";
import SelectActionQuestion from "./components/SelectActionQuestion";

const technologies: string[] = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Next.js",
    "Архитектура",
    "Redux",
    "Общие вопросы",
    "Вопросы от кандидата",
];

const QuestionsPage = () => {
    const [activeTech, setActiveTech] = useState<string>("React");
    const questions = useGetSomeQuestions(activeTech.toLocaleLowerCase());
    const [filteredQuestions, setFilteredQuestions] = useState<null | Question[]>(null);
    // setFilteredQuestions - прокинуть в форму и сделать функцию фильтрации внутри QuestionsCards
    return (
        <>
            <SelectActionQuestion />
            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <QuestionsNavBar
                        technologies={technologies}
                        setActiveTech={setActiveTech}
                        activeTech={activeTech}
                    />

                    <QuestionsCards
                        filteredQuestions={filteredQuestions}
                        allQuestionsActive={false}
                        questions={questions}
                        isAdmin={false}
                        status="ACCEPT"
                    />
                </div>
            </div>
        </>
    );
};

export default QuestionsPage;
