import { Question } from "@/types/question/question";
import styles from "./QuestionsCards.module.css";
import QuestionDetails from "./components/QuestionDetails";
interface Props {
    questions: {
        questions: Question[] | undefined;
        isLoading: boolean;
        error: Error | null;
    };
    status: string;
    isAdmin: boolean;
    allQuestionsActive: boolean;
}

const QuestionsCards = ({ questions, status, isAdmin, allQuestionsActive }: Props) => {
    if (questions?.isLoading) {
        return <div>LOADING</div>;
    }
    if (questions?.error) {
        return <div>ERROR</div>;
    }
    if (questions?.questions) {
        return (
            <div className={styles.flexContainer}>
                <section className={styles.commonWrapper}>
                    <div className={styles.wrapperQuestion}>
                        {questions.questions.map((question, index) => (
                            <QuestionDetails
                                status={status}
                                isAdmin={isAdmin}
                                key={question._id}
                                question={question}
                                index={index}
                                allQuestionsActive={index === 0 ? true : allQuestionsActive}
                            />
                        ))}
                    </div>
                    {status === "PENDING" && isAdmin && (
                        <button className={styles.buttonAcceptAll}>Принять все заявки</button>
                    )}
                </section>
            </div>
        );
    }
};
export default QuestionsCards;
