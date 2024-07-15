import { useTechnologyNav } from "@/app/store";
import { BASE_URL } from "@/frontend/configs/baseURL";
import { Question } from "@/frontend/types/question/question";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { OjbectQuestions } from "./types";

const useQuestion = () => {
    const { technology } = useTechnologyNav();
    const session = useSession();
    const email = session.data?.user?.email;
    const queryClient = useQueryClient();
    const path = usePathname();
    let questions, isLoading;
    // Получить вопрос определенной technology для всех
    const getQuestions = async (currentTechonoly: string) => {
        if (technology) {
            const { data } = await axios.get<OjbectQuestions>(
                `${BASE_URL}/questions/${currentTechonoly}Question?status=ACCEPT`,
            );
            const questions = data[currentTechonoly];
            return questions;
        }
    };
    const dataQuestions = useQuery({
        queryKey: [`questions${technology}`],
        queryFn: () => getQuestions(technology),
    });

    // (Для админа) - получить список вопросов статуса PENDING
    const getPendingQuestions = async () => {
        const { data } = await axios.get<OjbectQuestions>(`${BASE_URL}/questions/pendingQuestion`);
        return data.pendingQuestions;
    };
    const dataPendingQuestions = useQuery({
        queryKey: ["pendingQuestions"],
        queryFn: getPendingQuestions,
    });

    // Получить questions персонально для юзера
    const getUserQuestions = async () => {
        const { data } = await axios.get<Question[]>(
            `${BASE_URL}/getUser/questions?email=${email}&question=${technology}`,
        );
        return data;
    };
    const dataUserQuestions = useQuery({
        queryKey: [`userQuestions${technology}`],
        queryFn: getUserQuestions,
        enabled: !!email,
    });

    // Получить favoriteQuestions
    const getFavoriteQuestions = async () => {
        const { data } = await axios.get<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`);
        return data;
    };
    const dataFavoriteQuestions = useQuery({
        queryKey: ["favoriteQuestion"],
        queryFn: getFavoriteQuestions,
        enabled: !!email,
    });

    // Добавить question в список фаваритов
    const updateFavoriteQuestions = async (question: Question) => {
        const { data } = await axios.patch<Question[]>(`${BASE_URL}/userFavoriteQuestion?email=${email}`, {
            question: { technology, ...question },
            email,
        });
        return data;
    };
    const mutationCreate = useMutation({
        mutationFn: updateFavoriteQuestions,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`favoriteQuestion`] }),
    });
    const createFavoriteQuestion = (question: Question) => {
        mutationCreate.mutate(question);
    };

    // Создать question для юзера
    const createUserQuestion = async (question: Question) => {
        const { data } = await axios.patch<Question[]>(`${BASE_URL}/userQuestion`, {
            question,
            email,
        });
        return data;
    };
    const mutateUserQuestion = useMutation({
        mutationFn: createUserQuestion,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`createUserQuestion`] }),
    });
    const handleCreateUserQuestion = (question: Question) => {
        mutateUserQuestion.mutate(question);
    };

    // Добавить question в общий пул
    const createQuestion = async ({ question, status }: { question: Question; status: string }) => {
        const { data } = await axios.post<Question[]>(`${BASE_URL}/questions/${technology}Question`, {
            ...question,
            status,
        });
        return data;
    };
    const mutateQuestion = useMutation({
        mutationFn: createQuestion,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`createQuestion`] }),
    });
    const handleCreateQuestion = ({ question, status }: { question: Question; status: string }) => {
        mutateQuestion.mutate({ question, status });
    };

    // Добавить question список Pending
    const createPeningQuestion = async (question: Question) => {
        const { data } = await axios.post<Question[]>(`${BASE_URL}/questions/pendingQuestion`, question);
        return data;
    };
    const mutatePendingQuestion = useMutation({
        mutationFn: createPeningQuestion,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [`createQuestion`] }),
    });
    const handleCreatePendingQuestion = (question: Question) => {
        mutatePendingQuestion.mutate(question);
    };

    // В зависимости от роута отдавать конкретный questions
    switch (true) {
        case path.includes("/questionsPage/myQuestions"): {
            questions = dataUserQuestions.data;
            isLoading = dataUserQuestions.isLoading;
            break;
        }
        case path.includes("/questionsPage/favoriteQuestions"): {
            questions = dataFavoriteQuestions.data;
            isLoading = dataFavoriteQuestions.isLoading;
            break;
        }
        case path.includes("/questionsPage/pendingQuestions"): {
            questions = dataPendingQuestions.data;
            isLoading = dataPendingQuestions.isLoading;
            break;
        }
        default: {
            questions = dataQuestions.data;
            isLoading = dataQuestions.isLoading;
        }
    }
    return {
        questions,
        dataFavoriteQuestions,
        isLoading,
        email,
        createFavoriteQuestion,
        handleCreateUserQuestion,
        handleCreateQuestion,
        handleCreatePendingQuestion,
    };
};

export default useQuestion;
