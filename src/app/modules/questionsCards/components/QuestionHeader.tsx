import useFavoriteQuestions from "@/app/hooks/useFavoriteQuestions";
import { Question } from "@/types/question/question";
import { useSession } from "next-auth/react";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import styles from "../QuestionsCards.module.css";

interface QuestionHeaderProps {
    question: Question;
    index: number;
    status: string;
    setIsActive: (value: boolean) => void;
    isActive: boolean;
}

const QuestionHeader = ({ question, index, status, setIsActive, isActive }: QuestionHeaderProps) => {
    const session = useSession();
    const email = session.data?.user?.email;
    const { favoriteQuestions, createFavoriteQuestion } = useFavoriteQuestions({ email, question });

    const isFavoriteQuestion = favoriteQuestions?.some(
        favoriteQuestion => JSON.stringify(favoriteQuestion?.answer) === JSON.stringify(question.answer),
    );
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
            {!isActive && index !== 0 ? (
                <FaRegEyeSlash className={styles.eyeIcon} />
            ) : (
                <LuEye className={styles.eyeIcon} />
            )}
        </section>
    );
};

export default QuestionHeader;
