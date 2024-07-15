import { Question } from "@/frontend/types/question/question";

export const handleFilterQuestions = (questions: Question[] | undefined, filterValue: string) => {
    const filterQuestions = questions?.filter(
        question =>
            question.question.toLowerCase().includes(filterValue.toLowerCase()) ||
            question.answer.toLowerCase().includes(filterValue.toLowerCase()),
    );
    return filterQuestions;
};
