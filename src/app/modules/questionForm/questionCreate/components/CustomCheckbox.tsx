import { useEffect, useState } from "react";
import styles from "../QuestionCreate.module.css";
const CustomCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem("checkboxState");
        if (savedState === "true") setIsChecked(true);
    }, []);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = event.target.checked;
        setIsChecked(newState);
        localStorage.setItem("checkboxState", String(newState));
    };
    return (
        <label className={styles.customCheckbox}>
            <input name="checkbox" type="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span className={styles.checkmark}></span>
            <p className={styles.textForCheckbox}>
                Отправить на рассмотрение, чтобы также добавить информацию в общую базу. Другие пользователи будут
                видеть эту информацию.
            </p>
        </label>
    );
};

export default CustomCheckbox;
