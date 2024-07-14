"use client";
import AdminControls from "@/components/button/AdminControls";
import LoadingSkeleton from "@/components/loading/LoadingSkeleton";

import useFilterQuestions from "@/app/store";
import useGetQuestions from "@/hooks/useGetQuestions";
import { useEffect } from "react";
import styles from "../QuestionsCards.module.css";
import QuestionContent from "./QuestionContent";

interface Props {
    status?: string;
}
const QuestionList = ({ status }: Props) => {
    const { questions, isLoading } = useGetQuestions();
    const { filterValue, setFilterValue } = useFilterQuestions();
    const filterQuestions = questions?.filter(
        question =>
            question.question.toLowerCase().includes(filterValue.toLowerCase()) ||
            question.answer.toLowerCase().includes(filterValue.toLowerCase()),
    );
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
