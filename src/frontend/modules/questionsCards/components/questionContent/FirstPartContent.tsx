import SnipedCode from "@/frontend/shared/components/snipetCode/SnipetCode";
import Text from "@/frontend/shared/components/text/Text";
import { ContentProps } from "../../types/types";
import styles from "./QuestionContent.module.css";

const FirstPartContent = ({ isActive, question }: ContentProps) => {
    return (
        isActive && (
            <section className={styles.sectionAnswer}>
                <div className={styles.flexContainer}>
                    {question.answer.split("\n").map((line, idx) => (
                        <Text key={idx} text={line} />
                    ))}
                </div>
                {question.sliceOfCode && <SnipedCode code={question.sliceOfCode} />}
            </section>
        )
    );
};

export default FirstPartContent;
