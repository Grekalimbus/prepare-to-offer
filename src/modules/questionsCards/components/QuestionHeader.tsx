import useFavoriteQuestions from "@/hooks/useFavoriteQuestions";
import { Question } from "@/types/question/question";
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
    const { isFavoriteQuestion, createFavoriteQuestion, email } = useFavoriteQuestions(question);
    return (
        <section onClick={() => setIsActive(!isActive)} className={styles.buttonQuestion}>
            <div className={styles.questionButtonFlex}>
                {status !== "PENDING" && email && (
                    <BiSolidBookmarkPlus
                        className={`${styles.favoriteIcon} ${isFavoriteQuestion ? styles.active : ""}`}
                        onClick={createFavoriteQuestion}
                    />
                )}
                <p className={styles.point}>
                    {index + 1}. &nbsp;
                    {question.question}
                </p>
            </div>
            {!isActive ? <FaRegEyeSlash className={styles.eyeIcon} /> : <LuEye className={styles.eyeIcon} />}
        </section>
    );
};

export default QuestionHeader;
