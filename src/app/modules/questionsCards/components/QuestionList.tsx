"use client";
import useGetSomeQuestions from "@/app/hooks/useGetSomeQuestions";
import { useParams } from "next/navigation";
import styles from "../QuestionsCards.module.css";
import LoadingSkeleton from "./LoadingSkeleton";
import QuestionContent from "./QuestionContent";

type Params = {
    currentTechonoly: string;
};

interface Props {
    status: string;
}

const QuestionList = ({ status }: Props) => {
    const { currentTechonoly } = useParams<Params>();
    const { questions, isLoading } = useGetSomeQuestions(currentTechonoly.toLocaleLowerCase());
    console.log("currentTechonoly", currentTechonoly);
    if (isLoading) {
        return <LoadingSkeleton />;
    }
    return (
        <>
            {questions?.map((question, index) => {
                return (
                    <div key={question._id} className={styles.questionCard}>
                        {question.technology && <p className={styles.point}>Категория: {question.technology}</p>}
                        {<QuestionContent question={question} index={index} status={status} />}
                        {/* {status === "PENDING" && isAdmin && <AdminControls onReject={() => {}} onAccept={() => {}} />} */}
                    </div>
                );
            })}
        </>
    );
};

export default QuestionList;
