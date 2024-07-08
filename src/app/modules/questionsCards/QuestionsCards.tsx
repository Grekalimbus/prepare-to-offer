import styles from "./QuestionsCards.module.css";
import AcceptAll from "./components/AcceptAll";
import FilterForm from "./components/FilterForm";
import QuestionList from "./components/QuestionList";
interface Props {
    status: string;
}

const QuestionsCards = ({ status }: Props) => {
    return (
        <div className={styles.flexContainer}>
            <FilterForm />
            <section className={styles.commonWrapper}>
                <div className={styles.wrapperQuestion}>
                    <QuestionList status={status} />
                </div>
                {status === "PENDING" && <AcceptAll />}
            </section>
        </div>
    );
};
export default QuestionsCards;
