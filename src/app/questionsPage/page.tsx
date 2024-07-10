import QuestionsCards from "@/app/modules/questionsCards/QuestionsCards";
import SelectCategoryButtons from "@/app/modules/selectSectionButtons/SelectSectionButtons";
import styles from "./QuestionsPage.module.css";
import QuestionsNavBar from "./components/QuestionsNavBar";

interface Props {
    params: { currentTechonoly: string };
}
interface Section {
    text: string;
    section: string;
}

const sections: Section[] = [
    { text: "Добавить новый вопрос", section: "addNew" },
    { text: "Вопросы для всех", section: "forAllQuestions" },
    { text: "Мои вопросы", section: "myQuestions" },
];

const page = ({ params }: Props) => {
    console.log("params", params);
    return (
        <>
            <SelectCategoryButtons
                currentSection={{ section: "questions", text: "Вопросы для всех" }}
                sections={sections}
            />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <QuestionsCards status="ACCEPT" />
                    <QuestionsNavBar params={params} />
                </div>
            </div>
        </>
    );
};

export default page;
