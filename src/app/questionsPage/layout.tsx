import { ReactNode } from "react";
import ReusedLayout from "../layouts/reusedLayout/ReusedLayout";

type Props = {
    children: ReactNode; // Протипизируем children как ReactNode
};

interface Section {
    text: string;
    section: string;
}
interface NavButton {
    text: string;
    value: string;
}
const technologies: NavButton[] = [
    { value: "react", text: "React" },
    { value: "javascript", text: "JavaScript" },
    { value: "typescript", text: "TypeScript" },
    { value: "html", text: "HTML" },
    { value: "css", text: "CSS" },
    // { value: "architecture", text: "Архитектура" },
    // { value: "redux", text: "Redux" },
    // { value: "common", text: "Общие вопросы" },
    // { value: "fromCandidate", text: "Вопросы от кандидата" },
];
const sections: Section[] = [
    { text: "Добавить новый вопрос", section: "addQuestion" },
    { text: "Вопросы для всех", section: "allQuestions" },
    { text: "Мои вопросы", section: "myQuestions" },
];

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <ReusedLayout
            sections={sections}
            arrayButtons={technologies}
            currentSection={{ section: "navQuestions", value: "react" }}
        >
            {children}
        </ReusedLayout>
    );
};

export default MainLayout;
