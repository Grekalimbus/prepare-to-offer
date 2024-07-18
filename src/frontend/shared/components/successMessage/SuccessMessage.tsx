import { GoCheckCircleFill } from "react-icons/go";
import Modal from "../modalWindow/Modal";
import styles from "./SuccessMessage.module.css";

const SuccessMessage = ({ isSuccess }: { isSuccess: boolean }) => {
    return (
        <Modal>
            <aside className={`${styles.successWrapper} ${!isSuccess ? styles.hide : styles.show}`}>
                <GoCheckCircleFill className={styles.successIcon} />
                <p className={styles.text}>Success</p>
            </aside>
        </Modal>
    );
};

export default SuccessMessage;
