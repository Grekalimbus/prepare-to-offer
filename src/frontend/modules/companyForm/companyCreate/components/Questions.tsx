import InputWithRemoveButton from "@/frontend/shared/components/inputRemoveButton/InputWithRemoveButton";
import Text from "@/frontend/shared/components/text/Text";
import AddInput from "@/frontend/ui/Buttons/addInput/AddInput";
import { useState } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
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
            <Text text="Вопросы с собеседования" />
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
            <AddInput icon={<BsPatchQuestionFill />} onClick={handleIncrement} text="Добавить еще вопросы" />
        </>
    );
};

export default Questions;
