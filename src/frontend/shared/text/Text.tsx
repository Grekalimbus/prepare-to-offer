import { ReactNode } from "react";
import styles from "./Text.module.css";

interface Props {
    text: string;
    children?: ReactNode;
}

const Text = ({ text, children }: Props) => {
    return (
        <p className={styles.text}>
            {text}
            {children}
        </p>
    );
};

export default Text;
