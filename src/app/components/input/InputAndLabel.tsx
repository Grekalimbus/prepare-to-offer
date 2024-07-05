import styles from "./Input.module.css";

export interface Props {
    type?: null | boolean;
    name: string;
    inputType: string;
    placeholder: string;
    error?: string;
}

const InputAndLabel = ({ type, name, inputType, placeholder, error }: Props) => {
    return (
        <>
            {type !== null && (
                <label style={{ display: !type ? "block" : "none" }} htmlFor={name} className={styles.error}>
                    {error}
                </label>
            )}
            <input placeholder={placeholder} className={styles.inputWithLabel} name={name} type={inputType} required />
        </>
    );
};

export default InputAndLabel;
