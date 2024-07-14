import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectQuestions {
    pendingQuestions: Question[];
}

const usePendingQuestions = () => {
    const fetchData = async () => {
        const { data } = await axios.get<OjbectQuestions>(`${BASE_URL}/questions/pendingQuestion`);
        return data.pendingQuestions;
    };
    const dataPendingQuestion = useQuery({
        queryKey: ["pendingQuestions"],
        queryFn: fetchData,
    });

    return { dataPendingQuestion };
};

export default usePendingQuestions;
