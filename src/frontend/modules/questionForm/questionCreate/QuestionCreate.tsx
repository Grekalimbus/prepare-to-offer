"use client";
import useQuestion from "@/frontend/domains/question/useQuestion";
import useUser from "@/frontend/domains/user/useUser";
import ErrorMessage from "@/frontend/shared/components/errorMessage/ErrorMessage";
import FieldForCodeSlice from "@/frontend/shared/components/fieldForCodeSlice/FieldForCodeSlice";
import Loader from "@/frontend/shared/components/modalWindow/modalLoader/ModalLoader";
import RadioSelect from "@/frontend/shared/components/radioSelect/RadioSelect";

import { useTechnologyNav } from "@/app/store";
import SuccessMessage from "@/frontend/shared/components/successMessage/SuccessMessage";
import DefaultButton from "@/frontend/ui/Buttons/defaultButton/DefaultButton";
import InputLight from "@/frontend/ui/Input/inputLight/InputLight";
import TextArea from "@/frontend/ui/Input/textArea/TextArea";
import { FormEvent, useRef, useState } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./QuestionCreate.module.css";
import CustomCheckbox from "./components/CustomCheckbox";
import UsefulLinks from "./components/UsefulLinks";
import handleSubmit from "./helpers/handleSubmit";

const QuestionCreate = () => {
    const { arrayButtons } = useTechnologyNav();
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);
    const { handleCreateUserQuestion, handleCreateQuestion, handleCreatePendingQuestion } = useQuestion();
    const { isAdmin } = useUser();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoader(true);
        await handleSubmit({
            event,
            isAdmin,
            setErrorMessage,
            setIsError,
            formRef,
            handleCreateUserQuestion,
            handleCreateQuestion,
            handleCreatePendingQuestion,
            setIsSuccess,
        });
        setIsLoader(false);
    };

    return (
        <section className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.formBlock} ref={formRef}>
                <InputLight required={true} name="question" type="text" placeholder="Введите вопрос" />
                <TextArea name="answer" placeholder="Введите ответ на вопрос" required={true} />
                <RadioSelect array={arrayButtons} name="technology" textForSelect="Выберите раздел" />
                <FieldForCodeSlice text="Добавить снипет кода" icon={<FaRegFileCode />} />
                <UsefulLinks />
                <CustomCheckbox />
                <span className={styles.line}></span>
                <DefaultButton text="Создать" />
            </form>
            <ErrorMessage errorMessage={errorMessage} isError={isError} setIsError={setIsError} />
            <SuccessMessage isSuccess={isSuccess} />
            <Loader isLoader={isLoader} />
        </section>
    );
};

export default QuestionCreate;
