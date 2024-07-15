import { Question } from "@/types/question/question";
import Link from "next/link";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../QuestionsCards.module.css";
import QuestionHeader from "./QuestionHeader";

interface QuestionContentProps {
    question: Question;
    index: number;
    status?: string;
}

const QuestionContent = ({ question, index, status }: QuestionContentProps) => {
    const [isActive, setIsActive] = useState<boolean>(!index ? true : false);

    return (
        <>
            <QuestionHeader
                isActive={isActive}
                setIsActive={setIsActive}
                question={question}
                index={index}
                status={status}
            />
            {isActive && (
                <section className={styles.sectionAnswer}>
                    <p className={styles.point}>
                        {question.answer.split("\n").map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                {idx !== question.answer.split("\n").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
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
            {isActive && question?.links?.length > 0 && (
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
            )}
        </>
    );
};

export default QuestionContent;
