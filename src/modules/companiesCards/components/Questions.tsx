import { Company } from "@/types/company/company";
import styles from "../CompaniesCards.module.css";

const Questions = ({ company }: { company: Company }) => {
    return (
        <div className={styles.wrapperSection}>
            <p className={styles.questions}>Вопросы с собеседования: </p>
            {company.questions.map((question, index) => (
                <p key={question} className={styles.question}>
                    {index + 1}. &nbsp; {question}
                </p>
            ))}
        </div>
    );
};

export default Questions;
