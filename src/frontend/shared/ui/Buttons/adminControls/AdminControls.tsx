import styles from "./AdminControls.module.css";

const AdminControls = () => {
    return (
        <div className={styles.flexButtonContainer}>
            <button className={styles.buttonInFlex}>Отклонить заявку</button>
            <button className={styles.buttonInFlex}>Принять</button>
        </div>
    );
};

export default AdminControls;
