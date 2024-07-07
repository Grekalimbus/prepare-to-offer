import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface OjbectQuestions {
    [key: string]: Question[];
}

const useFavoriteQuestions = () => {
    const queryClient = useQueryClient();
    // const fetchData = async () => {
    //     const { data } = await axios.get<Question[]>(`${BASE_URL}/userFavoriteQuestion`);
    //     return data;
    // };
    const fetchDataCreate = async ({ question, email }: { question: Question; email: string }) => {
        const { data } = await axios.patch<Question[]>(`${BASE_URL}/userFavoriteQuestion`, { question, email });
        return data;
    };
    // const {
    //     data: favoriteQuestions,
    //     isLoading,
    //     error,
    // } = useQuery({
    //     queryKey: [`favoriteQuestion`],
    //     queryFn: fetchData,
    // });
    const mutationCreate = useMutation({
        mutationFn: fetchDataCreate,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`faviruteQuestion`] }),
    });
    const createFavoriteQuestion = (newQuestion: Question, email: string) => {
        mutationCreate.mutate({ question: newQuestion, email });
    };
    // useEffect(() => {
    //     fetchData();
    // }, [favoriteQuestions]);
    return { createFavoriteQuestion };
};

export default useFavoriteQuestions;
