import { Question } from "@/types/question/question";
import { useState } from "react";

const useFilteredQuestions = (questions: Question[]) => {
    const [filter, setFilter] = useState<string>("");

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const filteredQuestions = questions?.filter(question =>
        question.question.toLowerCase().includes(filter.toLowerCase()),
    );

    return { filter, handleFilterChange, filteredQuestions };
};

export default useFilteredQuestions;
