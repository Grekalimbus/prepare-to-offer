import { InputProps } from "../type";
import styles from "./InputDark.module.css";

const InputDark = ({ type, name, placeholder, required }: InputProps) => {
    return <input name={name} placeholder={placeholder} className={styles.inputDark} type={type} required={required} />;
};

export default InputDark;
