import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectQuestions {
    pendingQuestions: Question[];
}

const useGetPendingQuestions = () => {
    const fetchData = async () => {
        const { data } = await axios.get<OjbectQuestions>(`${BASE_URL}/questions/pendingQuestion`);
        return data.pendingQuestions;
    };
    const {
        data: questions,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["pendingQuestions"],
        queryFn: fetchData,
    });

    return { questions, isLoading, error };
};

export default useGetPendingQuestions;
