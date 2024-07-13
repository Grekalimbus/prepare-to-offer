"use client";
import ErrorMessage from "@/app/components/errorMessage/ErrorMessage";
import FieldForCodeSlice from "@/app/components/fieldForCodeSlice/FieldForCodeSlice";
import { LoaderContext } from "@/app/components/loader/LoaderContext";
import RadioSelect from "@/app/components/radioSelect/RadioSelect";
import TextareaAndLabel from "@/app/components/textareaAndLabel/TextareaAndLabel";
import Button from "@/app/ui/Buttons/Button";
import Input from "@/app/ui/Input/Input";
import { useSession } from "next-auth/react";
import { FormEvent, useContext, useRef, useState } from "react";
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
    { text: "Redux", value: "redux" },
    { text: "Архитектура", value: "architecture" },
    { text: "Next.js", value: "nextJS" },
    { text: "Общие", value: "common" },
];

const QuestionCreate = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { setIsLoading } = useContext(LoaderContext);
    const formRef = useRef<HTMLFormElement>(null);
    const session = useSession();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (session.data?.user?.email) {
            setIsLoading(prev => !prev);
            const email = session.data.user?.email;
            await handleSubmit({ event, setErrorMessage, setIsError, email, formRef });
            setIsLoading(prev => !prev);
        }
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
