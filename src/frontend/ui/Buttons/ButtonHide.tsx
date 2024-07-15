import styles from "./Button.module.css";
export interface IProps {
    text: string;
    onClick?: () => void;
}

const ButtonHide = ({ text, onClick }: IProps) => {
    return (
        <button className={styles.buttonHide} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonHide;
