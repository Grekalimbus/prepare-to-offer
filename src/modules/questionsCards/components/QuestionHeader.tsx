import useFavoriteQuestions from "@/hooks/useFavoriteQuestions";
import { Question } from "@/types/question/question";
import React from "react";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import styles from "../QuestionsCards.module.css";

interface QuestionHeaderProps {
    question: Question;
    index: number;
    status?: string;
    setIsActive: (value: boolean) => void;
    isActive: boolean;
}

const QuestionHeader = ({ question, index, status, setIsActive, isActive }: QuestionHeaderProps) => {
    const { dataFavoriteQuestions, email, createFavoriteQuestion } = useFavoriteQuestions(question);
    const isFavoriteTrue = dataFavoriteQuestions.data?.some(item => item._id === question._id);
    return (
        <section onClick={() => setIsActive(!isActive)} className={styles.buttonQuestion}>
            <div className={styles.questionButtonFlex}>
                {status !== "PENDING" && email && (
                    <BiSolidBookmarkPlus
                        className={`${styles.favoriteIcon} ${isFavoriteTrue ? styles.active : ""}`}
                        onClick={createFavoriteQuestion}
                    />
                )}
                <p className={styles.point}>
                    {index + 1}. &nbsp;
                    {question.question.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                            {line}
                            {idx !== question.question.split("\n").length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>
            {!isActive ? <FaRegEyeSlash className={styles.eyeIcon} /> : <LuEye className={styles.eyeIcon} />}
        </section>
    );
};

export default QuestionHeader;
