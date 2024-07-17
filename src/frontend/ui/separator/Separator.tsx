import styles from "./Separator.module.css";
const Separator = () => {
    return (
        <div className={styles.separator}>
            <span className={styles.separatorElem}></span>
            <span className={styles.separatorText}>OR</span>
            <span className={styles.separatorElem}></span>
        </div>
    );
};

export default Separator;
