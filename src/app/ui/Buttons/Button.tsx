import { IProps } from "./TypeButton";
import styles from "./UIButton.module.css";

const Button = ({ text, onClick }: IProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
