"use client";
import useFilterQuestions from "@/app/store";
import useQuestion from "@/frontend/domains/question/useQuestion";
import AdminControls from "@/frontend/shared/components/button/AdminControls";
import LoadingSkeleton from "@/frontend/shared/components/loading/LoadingSkeleton";
import Text from "@/frontend/shared/components/text/Text";
import WrapperMessage from "@/frontend/shared/components/wrapperMessage/WrapperMessage";
import { useEffect } from "react";
import { handleFilterQuestions } from "../helpers/filterQuestions";
import styles from "../QuestionsCards.module.css";
import QuestionContent from "./questionContent/QuestionContent";

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
                <WrapperMessage message="В этой секции пусто / Выберите другую технологию из списка" />
            )}
            {filterQuestions?.map((question, index) => {
                return (
                    <div key={question._id} className={styles.questionCard}>
                        {question.technology && <Text text={`Категория: ${question.technology}`} />}
                        <QuestionContent question={question} index={index} status={status} />
                        {status === "PENDING" && <AdminControls />}
                    </div>
                );
            })}
        </>
    );
};

export default QuestionList;
