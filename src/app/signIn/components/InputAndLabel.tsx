import styles from "../SignIn.module.css";
import { PropsInputAndLabel } from "../types/types";

const InputAndLabel = ({ type, name, inputType, placeholder, error }: PropsInputAndLabel) => {
    return (
        <>
            {type !== null && (
                <label style={{ display: !type ? "block" : "none" }} htmlFor={name} className={styles.error}>
                    {error}
                </label>
            )}
            <input placeholder={placeholder} className={styles.input} name={name} type={inputType} required />
        </>
    );
};

export default InputAndLabel;
