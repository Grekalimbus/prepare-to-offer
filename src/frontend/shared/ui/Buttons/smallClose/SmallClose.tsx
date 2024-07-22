import styles from "./Button.module.css";

interface Props {
    onClick?: () => void;
}

const SmallClose = ({ onClick }: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>
            ✖
        </button>
    );
};

export default SmallClose;
