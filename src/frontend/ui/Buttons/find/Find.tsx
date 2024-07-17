import styles from "./Find.module.css";
const Find = ({ text }: { text: string }) => {
    return (
        <button className={styles.button} type="submit">
            {text}
        </button>
    );
};

export default Find;
