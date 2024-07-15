import AcceptAll from "@/components/button/AcceptAll";
import FilterForm from "./components/FilterForm";
import QuestionList from "./components/QuestionList";
import styles from "./QuestionsCards.module.css";
interface Props {
    status?: string;
}

const QuestionsCards = ({ status }: Props) => {
    return (
        <>
            <FilterForm />
            <section className={styles.commonWrapper}>
                <div className={styles.wrapperQuestion}>
                    <QuestionList status={status} />
                </div>
                {status === "PENDING" && <AcceptAll />}
            </section>
        </>
    );
};
export default QuestionsCards;
