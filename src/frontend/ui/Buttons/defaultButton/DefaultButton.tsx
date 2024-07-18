import styles from "./DefaultButton.module.css";
export interface IProps {
    text: string;
    onClick?: () => void;
}

const DefaultButton = ({ text, onClick }: IProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default DefaultButton;
