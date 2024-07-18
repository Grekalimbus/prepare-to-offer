import { InputProps } from "../type";
import styles from "./InputLight.module.css";

const InputLight = ({ type, name, placeholder, required }: InputProps) => {
    return (
        <input placeholder={placeholder} className={styles.inputLight} name={name} type={type} required={required} />
    );
};

export default InputLight;
