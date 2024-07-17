import { TextAreaProps } from "../type";
import styles from "./TextArea.module.css";

const TextArea = ({ name, placeholder, required }: TextAreaProps) => {
    return <textarea placeholder={placeholder} className={styles.field} name={name} required={required} />;
};

export default TextArea;
