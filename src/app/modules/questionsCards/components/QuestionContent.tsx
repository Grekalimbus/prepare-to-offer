import { Question } from "@/types/question/question";
import Link from "next/link";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../QuestionsCards.module.css";
import QuestionHeader from "./QuestionHeader";

interface QuestionContentProps {
    question: Question;
    index: number;
    status: string;
}

const QuestionContent = ({ question, index, status }: QuestionContentProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <QuestionHeader
                isActive={isActive}
                setIsActive={setIsActive}
                question={question}
                index={index}
                status={status}
            />
            {isActive ||
                (index === 0 && (
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
                ))}
            {isActive ||
                (index === 0 && question.links.length > 0 && (
                    <section className={styles.sectionLinks}>
                        <p className={styles.point}>Полезные ссылки: </p>
                        {question.links.map((link, index) => (
                            <Link
                                key={index}
                                target="blank"
                                style={{ color: "#0373f3" }}
                                href={link}
                                className={styles.point}
                            >
                                {link}
                            </Link>
                        ))}
                    </section>
                ))}
        </>
    );
};

export default QuestionContent;