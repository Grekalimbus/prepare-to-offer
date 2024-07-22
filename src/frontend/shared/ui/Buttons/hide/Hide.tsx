import styles from "./Hide.module.css";
export interface IProps {
    text: string;
    onClick?: () => void;
}

const Hide = ({ text, onClick }: IProps) => {
    return (
        <button className={styles.buttonHide} onClick={onClick}>
            {text}
        </button>
    );
};

export default Hide;
