"use client";
import useGetPendingQuestions from "@/app/hooks/useGetPendingQuestions";
import useGetSomeQuestions from "@/app/hooks/useGetSomeQuestions";
import { Question } from "@/types/question/question";
import { useParams, usePathname } from "next/navigation";
import styles from "../QuestionsCards.module.css";
import AdminControls from "./AdminControls";
import LoadingSkeleton from "./LoadingSkeleton";
import QuestionContent from "./QuestionContent";

type Params = {
    currentTechonoly: string;
};

interface Props {
    status: string;
}

interface GetQuestionsResult {
    questions: Question[] | undefined;
    isLoading: boolean;
}

const QuestionList = ({ status }: Props) => {
    const { currentTechonoly } = useParams<Params>();

    const path = usePathname();
    const questionsPath = path.includes("questionsPage/questions");

    const questionsHook = currentTechonoly
        ? useGetSomeQuestions(currentTechonoly.toLowerCase())
        : { questions: undefined, isLoading: false };
    const { questions, isLoading } = questionsHook;

    const pendingQuestionsHook = !questionsPath
        ? useGetPendingQuestions()
        : { questions: undefined, isLoading: undefined };
    const { questions: pendingQuestions, isLoading: isPendingLoading } = pendingQuestionsHook;

    const questionsToMap = questionsPath ? questions : pendingQuestions;
    const isLoadingData = questionsPath ? isLoading : isPendingLoading;

    if (isLoadingData) {
        return <LoadingSkeleton />;
    }
    return (
        <>
            {questionsToMap?.map((question, index) => {
                return (
                    <div key={question._id} className={styles.questionCard}>
                        {question.technology && <p className={styles.point}>Категория: {question.technology}</p>}
                        {<QuestionContent question={question} index={index} status={status} />}
                        {status === "PENDING" && <AdminControls />}
                    </div>
                );
            })}
        </>
    );
};

export default QuestionList;
// const getQuestions = (): GetQuestionsResult | []  => {
//     if (questionsPath) {
//         const { questions, isLoading } = useGetSomeQuestions(currentTechonoly.toLocaleLowerCase());
//         return { questions, isLoading }
//     }
//     if (!questionsPath) return [];
//     return []
// };
// const {questions, isLoading} = getQuestions();
