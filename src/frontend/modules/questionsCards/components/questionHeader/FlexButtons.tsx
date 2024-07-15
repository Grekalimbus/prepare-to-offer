import { BiSolidBookmarkPlus } from "react-icons/bi";
import { FlexButtonsProps } from "../../types/types";
import styles from "./QuestionHeader.module.css";

const FlexButtons = ({
    status,
    index,
    email,
    isFavoriteTrue,
    question,
    isActive,
    createFavoriteQuestion,
    setIsActive,
}: FlexButtonsProps) => {
    return (
        <div className={styles.questionButtonFlex}>
            {status !== "PENDING" && email && (
                <BiSolidBookmarkPlus
                    className={`${styles.favoriteIcon} ${isFavoriteTrue ? styles.active : ""}`}
                    onClick={() => createFavoriteQuestion(question)}
                />
            )}
            <p onClick={() => setIsActive(!isActive)} className={styles.point} style={{ width: "92%" }}>
                {index + 1}. &nbsp; {question.question}
            </p>
        </div>
    );
};

export default FlexButtons;
