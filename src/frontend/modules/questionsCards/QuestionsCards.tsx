import AcceptAll from "@/components/button/AcceptAll";
import FilterForm from "./components/FilterForm";
import QuestionList from "./components/QuestionList";
import styles from "./QuestionsCards.module.css";

const QuestionsCards = ({ status }: { status?: string }) => {
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
