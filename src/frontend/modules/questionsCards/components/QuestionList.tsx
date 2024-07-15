"use client";
import useFilterQuestions from "@/app/store";
import AdminControls from "@/components/button/AdminControls";
import LoadingSkeleton from "@/components/loading/LoadingSkeleton";
import useQuestion from "@/frontend/domains/question/useQuestion";
import { useEffect } from "react";
import { handleFilterQuestions } from "../helpers/filterQuestions";
import styles from "../QuestionsCards.module.css";
import QuestionContent from "./QuestionContent";

const QuestionList = ({ status }: { status?: string }) => {
    const { questions, isLoading } = useQuestion();
    const { filterValue, setFilterValue } = useFilterQuestions();
    const filterQuestions = handleFilterQuestions(questions, filterValue);

    // useEffect - Для очистки фильтрации при смене роута
    useEffect(() => {
        setFilterValue("");
    }, []);
    if (isLoading) {
        return <LoadingSkeleton />;
    }
    return (
        <>
            {filterQuestions?.length === 0 && (
                <div className={styles.dummy}>
                    В этой секции пусто
                    <br />
                    Выберите другую технологию из списка
                </div>
            )}
            {filterQuestions?.map((question, index) => {
                return (
                    <div key={question._id} className={styles.questionCard}>
                        {question.technology && <p className={styles.point}>Категория: {question.technology}</p>}
                        <QuestionContent question={question} index={index} status={status} />
                        {status === "PENDING" && <AdminControls />}
                    </div>
                );
            })}
        </>
    );
};

export default QuestionList;
