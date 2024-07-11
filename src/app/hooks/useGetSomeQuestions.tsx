import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import useCustomNavBarHook from "../modules/customNavBar/useCustomNavBarHook";

interface OjbectQuestions {
    [key: string]: Question[];
}

const useGetSomeQuestions = () => {
    const { activeSection } = useCustomNavBarHook({
        currentSection: { section: "navQuestions", value: "" },
    });
    const fetchData = async (currentTechonoly: string) => {
        if (activeSection.value) {
            const { data } = await axios.get<OjbectQuestions>(
                `${BASE_URL}/questions/${currentTechonoly}Question?status=ACCEPT`,
            );
            const questions = data[currentTechonoly];
            return questions;
        }
        return null;
    };
    const {
        data: questions,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`${activeSection.value}Question`],
        queryFn: () => fetchData(activeSection.value),
    });
    useEffect(() => {
        if (activeSection.value) fetchData(activeSection.value);
    }, [activeSection]);

    return { questions, isLoading, error };
};

export default useGetSomeQuestions;
