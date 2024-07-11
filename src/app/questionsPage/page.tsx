import QuestionsCards from "@/app/modules/questionsCards/QuestionsCards";
import SelectCategoryButtons from "@/app/modules/selectSectionButtons/SelectSectionButtons";
import CustomNavBar from "../modules/customNavBar/CustomNavBar";
import styles from "./QuestionsPage.module.css";

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
    { value: "nextjs", text: "Next.js" },
    { value: "architecture", text: "Архитектура" },
    { value: "redux", text: "Redux" },
    { value: "common", text: "Общие вопросы" },
    { value: "fromCandidate", text: "Вопросы от кандидата" },
];
const sections: Section[] = [
    { text: "Добавить новый вопрос", section: "addNew" },
    { text: "Вопросы для всех", section: "forAllQuestions" },
    { text: "Мои вопросы", section: "myQuestions" },
];

const page = () => {
    return (
        <>
            <SelectCategoryButtons
                currentSection={{ section: "questions", value: "forAllQuestions" }}
                sections={sections}
            />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <QuestionsCards status="ACCEPT" />
                    <CustomNavBar
                        arrayButtons={technologies}
                        currentSection={{ section: "navQuestions", value: "react" }}
                    />
                </div>
            </div>
        </>
    );
};

export default page;
