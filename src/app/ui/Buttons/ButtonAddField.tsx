import React, { ReactElement } from "react";
import styles from "./UIButton.module.css";

interface Props {
    icon: ReactElement;
    handleIncrement: () => void;
    text: string;
}

const ButtonAddField = ({ icon, handleIncrement, text }: Props) => {
    return (
        <button onClick={handleIncrement} className={styles.buttonAdd}>
            {text}
            {React.cloneElement(icon, { className: styles.iconInButton })}
        </button>
    );
};

export default ButtonAddField;
