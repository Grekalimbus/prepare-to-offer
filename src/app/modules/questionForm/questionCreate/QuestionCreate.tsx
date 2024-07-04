import Button from "@/app/ui/Buttons/Button";
import InputAndLabel from "@/app/ui/InputAndLabel/InputAndLabel";
import TextareaAndLabel from "@/app/ui/textareaAndLabel/TextareaAndLabel";
import { FormEvent } from "react";
import styles from "./QuestionCreate.module.css";
import CustomCheckbox from "./components/CustomCheckbox";
import SliceOfCode from "./components/SliceOfCode";
import UsefulLinks from "./components/UsefulLinks";

const QuestionCreate = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const question = formData.get("question");
        const answer = formData.get("answer");
        const sliceOfCode = formData.get("sliceOfCode");
        const link = formData.getAll("link");
        const checkbox = formData.get("checkbox");
        console.log("question", { question, answer, sliceOfCode, link, checkbox });
    };
    return (
        <section className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.formBlock}>
                <InputAndLabel
                    type={null}
                    name="question"
                    inputType="text"
                    placeholder="Введите вопрос"
                    error="Обязательно для заполнения"
                />
                <TextareaAndLabel
                    type={null}
                    name="answer"
                    placeholder="Введите ответ на вопрос"
                    error="Обязательно для заполнения"
                />
                <SliceOfCode />
                <UsefulLinks />
                <CustomCheckbox />
                <span className={styles.line}></span>
                <Button text="Создать" />
            </form>
        </section>
    );
};

export default QuestionCreate;
