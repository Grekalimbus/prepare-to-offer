import { useTechnologyNav } from "@/app/store";
import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const useFavoriteQuestions = (question?: Question) => {
    const session = useSession();
    const { technology } = useTechnologyNav();
    const email = session.data?.user?.email;
    const queryClient = useQueryClient();
    const fetchData = async () => {
        if (email) {
            const { data } = await axios.get<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`);
            return data;
        }
    };

    const fetchDataCreate = async (question: Question) => {
        const { data } = await axios.patch<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`, {
            question: { technology: technology, ...question },
            email,
        });
        return data;
    };
    const dataFavoriteQuestions = useQuery({
        queryKey: ["favoriteQuestion"],
        queryFn: fetchData,
        enabled: !!email,
    });
    const mutationCreate = useMutation({
        mutationFn: fetchDataCreate,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`favoriteQuestion`] }),
    });
    const createFavoriteQuestion = () => {
        if (question) mutationCreate.mutate(question);
    };
    return { createFavoriteQuestion, dataFavoriteQuestions, email };
};

export default useFavoriteQuestions;
