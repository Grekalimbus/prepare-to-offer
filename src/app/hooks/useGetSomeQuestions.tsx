import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectQuestions {
    [key: string]: Question[];
}

const useGetSomeQuestions = (currentTechonoly: string) => {
    const fetchData = async (currentTechonoly: string) => {
        const { data } = await axios.get<OjbectQuestions>(
            `${BASE_URL}/questions/${currentTechonoly}Question?status=ACCEPT`,
        );
        const questions = data[currentTechonoly];
        return questions;
    };
    const {
        data: questions,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`${currentTechonoly}Question`],
        queryFn: () => fetchData(currentTechonoly),
    });

    return { questions, isLoading, error };
};

export default useGetSomeQuestions;
