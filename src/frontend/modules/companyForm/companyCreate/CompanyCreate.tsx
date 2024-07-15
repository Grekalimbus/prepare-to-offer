"use client";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import FieldForCodeSlice from "@/components/fieldForCodeSlice/FieldForCodeSlice";
import RadioSelect from "@/components/radioSelect/RadioSelect";
import useCompany from "@/frontend/domains/company/useCompany";
import useUser from "@/frontend/domains/user/useUser";
import Button from "@/frontend/ui/Buttons/Button";
import Input from "@/frontend/ui/Input/Input";
import { FormEvent, useRef, useState } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./CompanyCreate.module.css";
import Questions from "./components/Questions";
import handleSubmit from "./helpers/handleSubmit";

const difficultyArray = [
    { text: "Легко", value: "Легко" },
    { text: "Средне", value: "Средне" },
    { text: "Сложно", value: "Сложно" },
];
const liveCodingArray = [
    { text: "Был", value: "Был" },
    { text: "Не был", value: "Не был" },
];
const typeOfInterview = [
    { text: "Скрининг", value: "Скрининг" },
    { text: "Технический", value: "Технический" },
    { text: "Другой", value: "Другой" },
];

const CompanyCreate = () => {
    const { handleUpdateUserCompany, handleCreateCompany } = useCompany();
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { isAdmin } = useUser();
    const formRef = useRef<HTMLFormElement>(null);
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleSubmit({
            event,
            isAdmin,
            setErrorMessage,
            setIsError,
            handleUpdateUserCompany,
            handleCreateCompany,
        });
        formRef.current?.reset();
    };

    return (
        <section className={styles.wrapper}>
            <form className={styles.formBlock} onSubmit={onSubmit} ref={formRef}>
                <p className={styles.textForSection}>
                    Информация добавится персонально, после чего проверится администратором и попадет в общий список для
                    всех пользователей
                </p>
                <Input name="companyName" inputType="text" placeholder="Название компании" required={true} />
                <Input
                    name="linkVacancy"
                    inputType="text"
                    placeholder="Ссылка на вакансию (если есть)"
                    required={false}
                />
                <Input
                    name="description"
                    inputType="text"
                    placeholder="Описание (Интервью легкое, собеседующий душнил. Длительность собеса)"
                    required={false}
                />
                <RadioSelect array={difficultyArray} name="difficulty" textForSelect={`Сложность:`} />
                <RadioSelect array={typeOfInterview} name="typeOfInterview" textForSelect={`Формат собеседования: `} />
                <RadioSelect array={liveCodingArray} name="liveCoding" textForSelect={`LiveCoding (Был/Нет)`} />
                <Questions />
                <FieldForCodeSlice text="Добавить задачи с собеседования" icon={<FaRegFileCode />} />
                <Button text="Создать" />
            </form>
            <ErrorMessage errorMessage={errorMessage} isError={isError} />
        </section>
    );
};

export default CompanyCreate;
