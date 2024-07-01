import styles from "./InputAndLabel.module.css";

export interface PropsInputAndLabel {
    type?: null | boolean;
    name: string;
    inputType: string;
    placeholder: string;
    error?: string;
}

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
