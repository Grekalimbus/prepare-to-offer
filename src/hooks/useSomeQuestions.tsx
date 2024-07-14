import { useTechnologyNav } from "@/app/store";
import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

interface OjbectQuestions {
    [key: string]: Question[];
}

const useSomeQuestions = () => {
    const { technology } = useTechnologyNav();
    const fetchData = async (currentTechonoly: string) => {
        if (technology) {
            const { data } = await axios.get<OjbectQuestions>(
                `${BASE_URL}/questions/${currentTechonoly}Question?status=ACCEPT`,
            );
            const questions = data[currentTechonoly];
            return questions;
        }
    };
    const dataSomeQuestions = useQuery({
        queryKey: [`${technology}Question`],
        queryFn: () => fetchData(technology),
    });
    useEffect(() => {
        if (technology) fetchData(technology);
    }, [technology]);

    return { dataSomeQuestions };
};

export default useSomeQuestions;