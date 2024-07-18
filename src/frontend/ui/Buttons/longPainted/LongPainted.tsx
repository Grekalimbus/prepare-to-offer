import styles from "./LongPainted.module.css";
const LongPainted = ({ text }: { text: string }) => {
    return <button className={styles.button}>{text}</button>;
};

export default LongPainted;
