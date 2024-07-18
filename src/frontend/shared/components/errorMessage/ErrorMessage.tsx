import SmallClose from "@/frontend/ui/Buttons/smallClose/SmallClose";
import { IoWarning } from "react-icons/io5";
import Modal from "../modalWindow/Modal";
import styles from "./ErrorMessage.module.css";

interface Props {
    errorMessage: string;
    isError: boolean;
    setIsError: (value: boolean) => void;
}
const ErrorMessage = ({ errorMessage, isError, setIsError }: Props) => {
    return (
        <Modal>
            <aside className={`${styles.errorWrapper} ${!isError ? styles.hide : styles.show}`}>
                <IoWarning className={styles.iconWarning} />
                <p className={styles.text}>{errorMessage}</p>
                <SmallClose onClick={() => setIsError(false)} />
            </aside>
        </Modal>
    );
};

export default ErrorMessage;
