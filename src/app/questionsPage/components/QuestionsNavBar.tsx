import Link from "next/link";
import styles from "../QuestionsPage.module.css";
import ButtonHideNav from "./ButtonHideNav";
import ButtonShowNav from "./ButtonShowNav";

interface ILink {
    endpoint: string;
    text: string;
}

const technologies: ILink[] = [
    { endpoint: "react", text: "React" },
    { endpoint: "javascript", text: "JavaScript" },
    { endpoint: "typescript", text: "TypeScript" },
    { endpoint: "html", text: "HTML" },
    { endpoint: "css", text: "CSS" },
    { endpoint: "nextjs", text: "Next.js" },
    { endpoint: "architecture", text: "Архитектура" },
    { endpoint: "redux", text: "Redux" },
    { endpoint: "common", text: "Общие вопросы" },
    { endpoint: "fromCandidate", text: "Вопросы от кандидата" },
];

interface Props {
    params: { currentTechonoly: string };
}

const QuestionsNavBar = ({ params }: Props) => {
    const { currentTechonoly } = params;
    return (
        <>
            <div id="tecnhologiesNavBar" className={styles.wrapperNavBar}>
                <div className={styles.navBar}>
                    <div className={styles.containerButtons}>
                        {technologies.map(technology => (
                            <Link
                                href={`/questionsPage/questions/${technology.endpoint}`}
                                key={technology.endpoint}
                                className={`${styles.interviewButton} ${
                                    currentTechonoly === technology.endpoint && styles.active
                                }`}
                            >
                                {technology.text}
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
