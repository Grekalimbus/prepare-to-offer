import Link from "next/link";
import { ContentProps } from "../../types/types";
import styles from "./QuestionContent.module.css";

const SecondPartContent = ({ isActive, question }: ContentProps) => {
    return (
        isActive &&
        question?.links?.length > 0 && (
            <section className={styles.sectionLinks}>
                <p className={styles.point}>Полезные ссылки: </p>
                {question.links.map((link, index) => (
                    <Link key={index} target="blank" style={{ color: "#0373f3" }} href={link} className={styles.point}>
                        {link}
                    </Link>
                ))}
            </section>
        )
    );
};

export default SecondPartContent;
