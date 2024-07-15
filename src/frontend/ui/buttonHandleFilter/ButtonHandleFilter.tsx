import styles from "./Button.module.css";
const ButtonHandleFilter = ({ text }: { text: string }) => {
    return (
        <button className={styles.button} type="submit">
            {text}
        </button>
    );
};

export default ButtonHandleFilter;
