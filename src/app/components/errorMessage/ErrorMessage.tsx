import { IoWarning } from "react-icons/io5";
import styles from "./ErrorMessage.module.css";

interface Props {
    errorMessage: string;
    isError: boolean;
}
const ErrorMessage = ({ errorMessage, isError }: Props) => {
    return (
        <aside className={`${styles.errorWrapper} ${!isError ? styles.hide : styles.show}`}>
            <IoWarning className={styles.iconWarning} />
            <p className={styles.text}>{errorMessage}</p>
        </aside>
    );
};

export default ErrorMessage;
