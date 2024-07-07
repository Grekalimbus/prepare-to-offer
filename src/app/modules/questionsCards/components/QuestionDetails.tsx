import useFavoriteQuestions from "@/app/hooks/useFavoriteQuestions";
import { Question } from "@/types/question/question";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../QuestionsCards.module.css";

interface Props {
    question: Question;
    isAdmin: boolean;
    status: string;
    index: number;
    allQuestionsActive?: boolean;
}

const QuestionDetails = ({ question, isAdmin, status, index, allQuestionsActive }: Props) => {
    const [isActive, setIsActive] = useState<boolean>(allQuestionsActive || false);
    const session = useSession();
    const email = session.data?.user?.email;

    const { favoriteQuestions, createFavoriteQuestion } = useFavoriteQuestions({ email, question });
    const isFavoriteQuestion = favoriteQuestions?.filter(favoriteQuestion => {
        return JSON.stringify(favoriteQuestion?.answer) === JSON.stringify(question.answer);
    });

    return (
        <div className={styles.questionCard}>
            {question.technology && <p className={styles.point}>Категория: {question.technology}</p>}
            <section onClick={() => setIsActive(!isActive)} className={styles.buttonQuestion}>
                <div className={styles.questionButtonFlex}>
                    {status !== "PENDING" && email && (
                        <BiSolidBookmarkPlus
                            className={`${styles.favoriteIcon} ${isFavoriteQuestion?.length ? styles.active : ""}`}
                            onClick={createFavoriteQuestion}
                        />
                    )}
                    <p className={styles.point}>
                        {index + 1}. &nbsp;
                        {question.question}
                    </p>
                </div>
                {!isActive && <FaRegEyeSlash className={styles.eyeIcon} />}
                {isActive && <LuEye className={styles.eyeIcon} />}
            </section>
            {isActive && (
                <section className={styles.sectionAnswer}>
                    <p className={styles.point}>{question.answer}</p>
                    {question.sliceOfCode && (
                        <SyntaxHighlighter
                            customStyle={{ width: "100%", borderRadius: "6px" }}
                            language="jsx"
                            style={atomOneDark}
                        >
                            {question.sliceOfCode}
                        </SyntaxHighlighter>
                    )}
                </section>
            )}
            {isActive && question.links.length > 0 && (
                <section className={styles.sectionLinks}>
                    <p className={styles.point}>Полезные ссылки: </p>
                    {question.links.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                target="blank"
                                style={{ color: "#0373f3" }}
                                href={link}
                                className={styles.point}
                            >
                                {link}
                            </Link>
                        );
                    })}
                </section>
            )}
            {status === "PENDING" && isAdmin && (
                <div className={styles.flexButtonContainer}>
                    <button className={styles.buttonInFlex}>Отклонить заявку</button>
                    <button className={styles.buttonInFlex}>Принять</button>
                </div>
            )}
        </div>
    );
};

export default QuestionDetails;
