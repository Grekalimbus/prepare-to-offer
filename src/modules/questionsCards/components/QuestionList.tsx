"use client";
import AdminControls from "@/components/button/AdminControls";
import LoadingSkeleton from "@/components/loading/LoadingSkeleton";
import useGetPendingQuestions from "@/hooks/useGetPendingQuestions";
import useGetSomeQuestions from "@/hooks/useGetSomeQuestions";
import useUser from "@/hooks/useUser";
import { Question } from "@/types/question/question";
import { usePathname } from "next/navigation";
import styles from "../QuestionsCards.module.css";
import QuestionContent from "./QuestionContent";

interface Props {
    status?: string;
}
interface QuestionsHookReturn {
    questions: Question[] | undefined;
    isLoading: boolean;
}
interface GetQuestions {
    questionsPath: boolean;
    myQuestionsPath: boolean;
    pendingQuestionsPath: boolean;
}
const getQuestions = ({ questionsPath, myQuestionsPath, pendingQuestionsPath }: GetQuestions): QuestionsHookReturn => {
    if (questionsPath) {
        const { questions, isLoading } = useGetSomeQuestions();
        return { questions, isLoading };
    } else if (myQuestionsPath) {
        const { myQuestions, isLoadingMyQuestions } = useUser();
        return { questions: myQuestions, isLoading: isLoadingMyQuestions };
    } else if (pendingQuestionsPath) {
        const { questions, isLoading } = useGetPendingQuestions();
        return { questions, isLoading };
    }
    return { questions: undefined, isLoading: false };
};
const QuestionList = ({ status }: Props) => {
    const path = usePathname();
    const questionsPath = path.includes("/questionsPage/allQuestions");
    const myQuestionsPath = path.includes("/questionsPage/myQuestions");
    const pendingQuestionsPath = path.includes("/questionsPage/pendingQuestions");

    const { questions, isLoading } = getQuestions({ questionsPath, myQuestionsPath, pendingQuestionsPath });

    console.log("questions", questions);
    if (isLoading) {
        return <LoadingSkeleton />;
    }
    return (
        <>
            {questions?.length === 0 && (
                <div className={styles.dummy}>
                    В этой секции пусто
                    <br />
                    Выберите другую технологию из списка
                </div>
            )}
            {questions?.map((question, index) => {
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
