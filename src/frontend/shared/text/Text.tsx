import styles from "./Text.module.css";

const Text = ({ text }: { text: string }) => {
    return <p className={styles.text}>{text}</p>;
};

export default Text;
