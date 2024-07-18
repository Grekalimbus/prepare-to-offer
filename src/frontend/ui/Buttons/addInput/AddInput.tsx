import React, { ReactElement } from "react";
import styles from "./AddInput.module.css";
interface Props {
    icon: ReactElement;
    onClick: () => void;
    text: string;
}

const AddInput = ({ icon, onClick, text }: Props) => {
    return (
        <button onClick={onClick} className={styles.buttonAdd}>
            {text}
            {React.cloneElement(icon, { className: styles.iconInButton })}
        </button>
    );
};

export default AddInput;
