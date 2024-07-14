import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const useFavoriteQuestions = (question: Question) => {
    const session = useSession();
    const email = session.data?.user?.email;
    const queryClient = useQueryClient();
    const fetchData = async () => {
        if (email) {
            const { data } = await axios.get<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`);
            return data;
        }
        return null;
    };

    const fetchDataCreate = async (question: Question) => {
        const { data } = await axios.patch<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`, {
            question,
            email,
        });
        return data;
    };
    const { data: isFavoriteQuestions } = useQuery({
        queryKey: ["favoriteQuestion"],
        queryFn: fetchData,
    });
    const mutationCreate = useMutation({
        mutationFn: fetchDataCreate,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`favoriteQuestion`] }),
    });
    const createFavoriteQuestion = () => {
        mutationCreate.mutate(question);
    };
    return { createFavoriteQuestion, isFavoriteQuestions, email };
};

export default useFavoriteQuestions;
