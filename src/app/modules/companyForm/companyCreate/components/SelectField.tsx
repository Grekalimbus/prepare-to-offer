import { useState } from "react";
import styles from "../CompanyCreate.module.css";

type SelectObject = {
    text: string;
    value: string;
};
interface Props {
    array: SelectObject[];
    name: string;
    textForSelect: string;
}

const SelectField = ({ array, name, textForSelect }: Props) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState("");

    return (
        <>
            <p className={styles.textForSection}>{textForSelect}</p>
            <div className={styles.wrapperSelectField}>
                {array.map(item => {
                    return (
                        <label key={item.value} className={styles.customCheckbox}>
                            <input
                                name={name}
                                type="radio"
                                value={item.value}
                                checked={selectedDifficulty === item.value}
                                onChange={() => setSelectedDifficulty(item.value)}
                            />
                            <span className={styles.checkmark}>{item.text}</span>
                        </label>
                    );
                })}
            </div>
            <span className={styles.line}></span>
        </>
    );
};

export default SelectField;
