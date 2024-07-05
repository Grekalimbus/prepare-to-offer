import ButtonAddField from "@/app/components/button/ButtonAddField";
import InputWithRemoveButton from "@/app/components/input/InputWithRemoveButton";
import { useState } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import styles from "../CompanyCreate.module.css";
const Questions = () => {
    const [questions, setQuestions] = useState<string[]>(["0"]);
    const handleIncrement = () => {
        setQuestions(prev => {
            const nextNumber = Number(prev[prev.length - 1]) + 1;
            return [...prev, String(nextNumber)];
        });
    };

    const handleDecrement = (value: string) => {
        if (questions.length > 1) {
            setQuestions(prev => prev.filter(item => item !== value));
        }
    };
    return (
        <>
            <p className={styles.textForSection}>Вопросы с собеседования</p>
            {questions.map(item => {
                return (
                    <InputWithRemoveButton
                        key={item}
                        valueKey={item}
                        name="question"
                        type="text"
                        placeholder="Введите вопрос"
                        required={true}
                        handleDecrement={handleDecrement}
                    />
                );
            })}
            <ButtonAddField
                icon={<BsPatchQuestionFill />}
                handleIncrement={handleIncrement}
                text="Добавить еще вопросы"
            />
        </>
    );
};

export default Questions;
