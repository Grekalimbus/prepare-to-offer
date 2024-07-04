import styles from "./Input.module.css";

export interface Props {
    name: string;
    inputType: string;
    placeholder: string;
    required: boolean;
}

const Input = ({ name, inputType, placeholder, required }: Props) => {
    return (
        <>
            <input
                placeholder={placeholder}
                className={styles.input}
                name={name}
                type={inputType}
                required={required}
            />
        </>
    );
};

export default Input;
