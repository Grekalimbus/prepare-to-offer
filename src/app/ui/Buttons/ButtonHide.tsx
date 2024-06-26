import { IProps } from "./TypeButton";
import styles from "./UIButton.module.css";
const ButtonHide = ({ text, onClick }: IProps) => {
    return (
        <button className={styles.buttonHide} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonHide;
