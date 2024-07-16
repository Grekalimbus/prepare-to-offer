import SnipedCode from "@/frontend/shared/snipetCode/SnipetCode";
import React from "react";
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
                {question.sliceOfCode && <SnipedCode code={question.sliceOfCode} />}
            </section>
        )
    );
};

export default FirstPartContent;
