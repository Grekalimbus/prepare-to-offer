import TextareaAndLabel from "@/app/ui/textareaAndLabel/TextareaAndLabel";
import { useState } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "../QuestionCreate.module.css";

const SliceOfCode = () => {
    const [isValid, setIsValid] = useState<boolean>(false);
    return (
        <>
            <button className={styles.buttonAdd} onClick={() => setIsValid(true)}>
                Добавить снипет кода
                <FaRegFileCode className={styles.iconInButton} />
            </button>
            {isValid && (
                <>
                    <TextareaAndLabel name="sliceOfCode" placeholder="Введите сниппет кода" />{" "}
                    <button onClick={() => setIsValid(false)} className={styles.buttonAdd}>
                        Удалить сниппет
                    </button>
                </>
            )}
        </>
    );
};

export default SliceOfCode;
