import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import useCustomNavBarHook from "../modules/customNavBar/useCustomNavBarHook";

interface OjbectQuestions {
    [key: string]: Question[];
}

const useGetSomeQuestions = (currentTechonoly: string) => {
    const { activeSection } = useCustomNavBarHook({
        currentSection: { section: "navQuestions", value: currentTechonoly },
    });
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
    useEffect(() => {
        fetchData(currentTechonoly);
        console.log("activeSection", activeSection);
    }, [activeSection]);

    return { questions, isLoading, error };
};

export default useGetSomeQuestions;
