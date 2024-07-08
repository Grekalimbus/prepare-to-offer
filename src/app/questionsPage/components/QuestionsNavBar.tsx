import Link from "next/link";
import styles from "../QuestionsPage.module.css";
import ButtonHideNav from "./ButtonHideNav";
import ButtonShowNav from "./ButtonShowNav";

const technologies: string[] = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Next.js",
    "Архитектура",
    "Redux",
    "Общие вопросы",
    "Вопросы от кандидата",
];

const QuestionsNavBar = () => {
    return (
        <>
            <div id="tecnhologiesNavBar" className={styles.wrapperNavBar}>
                <div className={styles.navBar}>
                    <div className={styles.containerButtons}>
                        {technologies.map(technology => (
                            <Link
                                href={`/questionsPage/questions/${technology}`}
                                key={technology}
                                className={`${styles.interviewButton}`}
                            >
                                {technology}
                            </Link>
                        ))}
                    </div>
                    <ButtonHideNav />
                </div>
            </div>
            <ButtonShowNav />
        </>
    );
};

export default QuestionsNavBar;
