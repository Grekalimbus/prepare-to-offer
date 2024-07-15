import { Question } from "@/frontend/types/question/question";
import { ReactNode } from "react";

export interface FlexButtonsProps {
    status?: string;
    index: number;
    question: Question;
    isActive: boolean;
    email: string | null | undefined;
    isFavoriteTrue: boolean | undefined;
    createFavoriteQuestion: (question: Question) => void;
    setIsActive: (value: boolean) => void;
}
export interface QuestionContentProps {
    question: Question;
    index: number;
    status?: string;
}
export interface QuestionToggleProps {
    children: ReactNode;
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}
export interface QuestionHeaderProps {
    question: Question;
    index: number;
    status?: string;
    setIsActive: (value: boolean) => void;
    isActive: boolean;
}
export interface ContentProps {
    isActive: boolean;
    question: Question;
}
