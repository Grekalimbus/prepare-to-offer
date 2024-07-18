import { Question } from "@/frontend/types/question/question";
import { FormEvent, RefObject } from "react";

export interface Props {
    event: FormEvent<HTMLFormElement>;
    formRef: RefObject<HTMLFormElement>;
    isAdmin: boolean;
    setErrorMessage: (value: string) => void;
    setIsError: (value: boolean) => void;
    setIsSuccess: (value: boolean) => void;
    handleCreateUserQuestion: (question: Question) => void;
    handleCreatePendingQuestion: (question: Question) => void;
    handleCreateQuestion: ({ question, status }: { question: Question; status: string }) => void;
}
