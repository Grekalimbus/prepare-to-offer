import styles from "../QuestionCreate.module.css";
const CustomCheckbox = () => {
    return (
        <label className={styles.customCheckbox}>
            <input name="checkbox" type="checkbox" id="checkbox" />
            <span className={styles.checkmark}></span>
            <p className={styles.textForCheckbox}>
                Отправить на рассмотрение, чтобы также добавить информацию в общую базу. Другие пользователи будут
                видеть эту информацию.
            </p>
        </label>
    );
};

export default CustomCheckbox;
