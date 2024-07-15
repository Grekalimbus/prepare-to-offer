import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { QuestionToggleProps } from "../../types/types";
import styles from "./QuestionHeader.module.css";

const QuestionToggle = ({ children, isActive, setIsActive }: QuestionToggleProps) => {
    return (
        <section className={styles.toggleQuestion}>
            {children}
            {!isActive ? (
                <FaRegEyeSlash onClick={() => setIsActive(!isActive)} className={styles.eyeIcon} />
            ) : (
                <LuEye onClick={() => setIsActive(!isActive)} className={styles.eyeIcon} />
            )}
        </section>
    );
};

export default QuestionToggle;
