import styles from "../QuestionsCards.module.css";

interface AdminControlsProps {
    onReject: () => void;
    onAccept: () => void;
}

const AdminControls = ({ onReject, onAccept }: AdminControlsProps) => {
    return (
        <div className={styles.flexButtonContainer}>
            <button className={styles.buttonInFlex} onClick={onReject}>
                Отклонить заявку
            </button>
            <button className={styles.buttonInFlex} onClick={onAccept}>
                Принять
            </button>
        </div>
    );
};

export default AdminControls;
