"use client";
import { useLoader } from "@/app/store";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import FieldForCodeSlice from "@/components/fieldForCodeSlice/FieldForCodeSlice";
import RadioSelect from "@/components/radioSelect/RadioSelect";
import TextareaAndLabel from "@/components/textareaAndLabel/TextareaAndLabel";
import useQuestion from "@/frontend/domains/question/useQuestion";
import useUser from "@/frontend/domains/user/useUser";
import Button from "@/frontend/ui/Buttons/Button";
import Input from "@/frontend/ui/Input/Input";
import { FormEvent, useRef, useState } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./QuestionCreate.module.css";
import CustomCheckbox from "./components/CustomCheckbox";
import UsefulLinks from "./components/UsefulLinks";
import handleSubmit from "./helpers/handleSubmit";

const arrayTechnologies = [
    { text: "HTML", value: "html" },
    { text: "CSS", value: "css" },
    { text: "Javascript", value: "javascript" },
    { text: "Typescript", value: "typescript" },
    { text: "React", value: "react" },
];

const QuestionCreate = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { setIsLoader } = useLoader();
    const formRef = useRef<HTMLFormElement>(null);
    const { handleCreateUserQuestion, handleCreateQuestion, handleCreatePendingQuestion } = useQuestion();
    const { isAdmin } = useUser();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoader();
        await handleSubmit({
            event,
            isAdmin,
            setErrorMessage,
            setIsError,
            formRef,
            handleCreateUserQuestion,
            handleCreateQuestion,
            handleCreatePendingQuestion,
        });
        setIsLoader();
    };

    return (
        <section className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.formBlock} ref={formRef}>
                <Input required={true} name="question" inputType="text" placeholder="Введите вопрос" />
                <TextareaAndLabel name="answer" placeholder="Введите ответ на вопрос" />
                <RadioSelect array={arrayTechnologies} name="technology" textForSelect="Выберите раздел" />
                <FieldForCodeSlice text="Добавить снипет кода" icon={<FaRegFileCode />} />
                <UsefulLinks />
                <CustomCheckbox />
                <span className={styles.line}></span>
                <Button text="Создать" />
            </form>
            <ErrorMessage errorMessage={errorMessage} isError={isError} />
        </section>
    );
};

export default QuestionCreate;
