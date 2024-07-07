import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectQuestions {
    [key: string]: Question[];
}

const useGetSomeQuestions = (technology: string) => {
    const fetchData = async (technology: string) => {
        const { data } = await axios.get<OjbectQuestions>(`${BASE_URL}/questions/${technology}Question?status=ACCEPT`);
        const questions = data[technology];
        return questions;
    };
    const {
        data: questions,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`${technology}Question`],
        queryFn: () => fetchData(technology),
    });

    return { questions, isLoading, error };
};

export default useGetSomeQuestions;
