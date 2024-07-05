import FieldForCodeSlice from "@/app/components/fieldForCodeSlice/FieldForCodeSlice";
import RadioSelect from "@/app/components/radioSelect/RadioSelect";
import TextareaAndLabel from "@/app/components/textareaAndLabel/TextareaAndLabel";
import Button from "@/app/ui/Buttons/Button";
import Input from "@/app/ui/Input/Input";
import { FormEvent } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./QuestionCreate.module.css";
import CustomCheckbox from "./components/CustomCheckbox";
import UsefulLinks from "./components/UsefulLinks";

const QuestionCreate = () => {
    const arrayTechnologies = [
        { text: "HTML", value: "html" },
        { text: "CSS", value: "css" },
        { text: "Javascript", value: "javascript" },
        { text: "Typescript", value: "typescript" },
        { text: "React", value: "react" },
        { text: "Redux", value: "redux" },
        { text: "Архитектура", value: "architecture" },
        { text: "Next.js", value: "nextJS" },
        { text: "Общие", value: "common" },
    ];
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
                <Input required={true} name="question" inputType="text" placeholder="Введите вопрос" />
                <TextareaAndLabel name="answer" placeholder="Введите ответ на вопрос" />
                <RadioSelect array={arrayTechnologies} name="technology" textForSelect="Выберите раздел" />
                <FieldForCodeSlice text="Добавить снипет кода" icon={<FaRegFileCode />} />
                <UsefulLinks />
                <CustomCheckbox />
                <span className={styles.line}></span>
                <Button text="Создать" />
            </form>
        </section>
    );
};

export default QuestionCreate;
