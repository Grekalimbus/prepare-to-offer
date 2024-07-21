import Text from "@/frontend/shared/components/text/Text";
import { Company } from "@/frontend/types/company/company";
import styles from "../CompaniesCards.module.css";

const Questions = ({ company }: { company: Company }) => {
    return (
        <section className={styles.wrapperSection}>
            <Text text="Вопросы с собеседования: " />
            {company.questions.map((question, index) => (
                <p key={question} className={styles.question}>
                    {index + 1}. {question}
                </p>
            ))}
        </section>
    );
};

export default Questions;
