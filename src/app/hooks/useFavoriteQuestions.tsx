import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Props {
    question: Question;
    email: string | null | undefined;
}
const useFavoriteQuestions = ({ question, email }: Props) => {
    const queryClient = useQueryClient();
    const fetchData = async () => {
        const { data } = await axios.get<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`);
        return data;
    };
    const fetchDataCreate = async ({ question, email }: Props) => {
        const { data } = await axios.patch<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`, {
            question,
            email,
        });
        return data;
    };
    const { data: favoriteQuestions } = useQuery({
        queryKey: ["favoriteQuestion"],
        queryFn: fetchData,
    });
    const mutationCreate = useMutation({
        mutationFn: fetchDataCreate,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`favoriteQuestion`] }),
    });
    const createFavoriteQuestion = () => {
        mutationCreate.mutate({ question, email });
    };

    return { createFavoriteQuestion, favoriteQuestions };
};

export default useFavoriteQuestions;
