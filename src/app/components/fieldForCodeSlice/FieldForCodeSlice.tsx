import React, { ReactElement, useState } from "react";
import TextareaAndLabel from "../textareaAndLabel/TextareaAndLabel";
import styles from "./FieldForCodeSlice.module.css";

interface Props {
    icon: ReactElement;
    text: string;
}

const FieldForCodeSlice = ({ icon, text }: Props) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    return (
        <>
            {isValid && (
                <>
                    <TextareaAndLabel name="sliceOfCode" placeholder="Введите сниппет кода" />
                    <button onClick={() => setIsValid(false)} className={styles.buttonAdd}>
                        Удалить сниппет
                    </button>
                </>
            )}
            {!isValid && (
                <button className={styles.buttonAdd} onClick={() => setIsValid(true)}>
                    {text}
                    {React.cloneElement(icon, { className: styles.iconInButton })}
                </button>
            )}
        </>
    );
};

export default FieldForCodeSlice;
