import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ContentProps } from "../../types/types";
import styles from "./QuestionContent.module.css";

const FirstPartContent = ({ isActive, question }: ContentProps) => {
    return (
        isActive && (
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
        )
    );
};

export default FirstPartContent;
