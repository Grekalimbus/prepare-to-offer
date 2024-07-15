import { Question } from "@/frontend/types/question/question";
import { usePathname } from "next/navigation";
import useFavoriteQuestions from "./useFavoriteQuestions";
import usePendingQuestions from "./usePendingQuestions";
import useSomeQuestions from "./useSomeQuestions";
import useUser from "./useUser";

interface QuestionsHookReturn {
    questions: Question[] | undefined;
    isLoading: boolean;
}

const useGetQuestions = (): QuestionsHookReturn => {
    const path = usePathname();
    const questionsPath = path.includes("/questionsPage/allQuestions");
    const myQuestionsPath = path.includes("/questionsPage/myQuestions");
    const favoriteQuestions = path.includes("/questionsPage/favoriteQuestions");
    const pendingQuestionsPath = path.includes("/questionsPage/pendingQuestions");
    if (questionsPath) {
        const { dataSomeQuestions } = useSomeQuestions();
        const questions = dataSomeQuestions.data;
        const isLoading = dataSomeQuestions.isLoading;
        return { questions, isLoading };
    } else if (myQuestionsPath) {
        const { dataMyQuestions } = useUser();
        const questions = dataMyQuestions.data;
        const isLoading = dataMyQuestions.isLoading;
        return { questions, isLoading };
    } else if (pendingQuestionsPath) {
        const { dataPendingQuestion } = usePendingQuestions();
        const questions = dataPendingQuestion.data;
        const isLoading = dataPendingQuestion.isLoading;
        return { questions, isLoading };
    } else if (favoriteQuestions) {
        const { dataFavoriteQuestions } = useFavoriteQuestions();
        const questions = dataFavoriteQuestions.data;
        const isLoading = dataFavoriteQuestions.isLoading;
        return { questions, isLoading };
    }
    return { questions: undefined, isLoading: false };
};

export default useGetQuestions;
