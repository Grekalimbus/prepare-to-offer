"use client";
import { NavButton } from "@/frontend/types/navButton/navButton";
import { Section } from "@/frontend/types/section/section";
import { ReactNode } from "react";
import ReusedLayout from "../../frontend/layouts/reusedLayout/ReusedLayout";

type Props = {
    children: ReactNode;
};

const technologies: NavButton[] = [
    { value: "react", text: "React" },
    { value: "javascript", text: "JavaScript" },
    { value: "typescript", text: "TypeScript" },
    { value: "html", text: "HTML" },
    { value: "css", text: "CSS" },
];
const sections: Section[] = [
    { value: "Вопросы для всех", section: "allQuestions" },
    { value: "Мои вопросы", section: "myQuestions" },
    { value: "Избранные", section: "favoriteQuestions" },
    { value: "Добавить новый вопрос", section: "addQuestion" },
];

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <ReusedLayout sections={sections} arrayButtons={technologies}>
            {children}
        </ReusedLayout>
    );
};

export default MainLayout;
