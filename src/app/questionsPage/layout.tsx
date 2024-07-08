import QuestionsNavBar from "./components/QuestionsNavBar";
import SelectActionQuestion from "./components/SelectActionQuestion";
import styles from "./QuestionsPage.module.css";

const QuestionPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SelectActionQuestion />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    {children}
                    <QuestionsNavBar />
                </div>
            </div>
        </>
    );
};

export default QuestionPageLayout;
