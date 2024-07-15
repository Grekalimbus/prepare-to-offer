import { Question } from "@/frontend/types/question/question";
import { useState } from "react";

const useFilteredQuestions = (questions?: Question[] | undefined) => {
    const [filterValue, setFilterValue] = useState<string>("");

    const handleFilterChange = (value: string) => {
        setFilterValue(prev => (prev = value));
    };

    const filteredQuestions = questions?.filter(question =>
        question.question.toLowerCase().includes(filterValue.toLowerCase()),
    );
    console.log("question", questions);
    return { filterValue, handleFilterChange, filteredQuestions };
};

export default useFilteredQuestions;
