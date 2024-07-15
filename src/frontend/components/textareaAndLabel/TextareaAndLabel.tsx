import styles from "./TextareaAndLabel.module.css";

export interface Props {
    type?: null | boolean;
    name: string;
    placeholder: string;
    error?: string;
}

const TextareaAndLabel = ({ type, name, placeholder, error }: Props) => {
    return (
        <>
            {type !== null && (
                <label style={{ display: !type ? "block" : "none" }} htmlFor={name} className={styles.error}>
                    {error}
                </label>
            )}
            <textarea placeholder={placeholder} className={styles.field} name={name} required />
        </>
    );
};

export default TextareaAndLabel;
