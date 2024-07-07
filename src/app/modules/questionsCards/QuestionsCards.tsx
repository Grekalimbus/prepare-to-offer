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
}

const QuestionsCards = ({ questions, status, isAdmin }: Props) => {
    console.log("questions", questions);
    console.log("status", status);
    console.log("isAdmin", isAdmin);
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
                                allActive={true}
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
