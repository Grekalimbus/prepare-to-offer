"use client";
import useCompany from "@/frontend/domains/company/useCompany";
import useUser from "@/frontend/domains/user/useUser";
import ErrorMessage from "@/frontend/shared/components/errorMessage/ErrorMessage";
import FieldForCodeSlice from "@/frontend/shared/components/fieldForCodeSlice/FieldForCodeSlice";
import RadioSelect from "@/frontend/shared/components/radioSelect/RadioSelect";
import SuccessMessage from "@/frontend/shared/components/successMessage/SuccessMessage";
import Text from "@/frontend/shared/components/text/Text";
import DefaultButton from "@/frontend/shared/ui/Buttons/defaultButton/DefaultButton";
import InputLight from "@/frontend/shared/ui/Input/inputLight/InputLight";
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
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
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
            setIsSuccess,
            formRef,
        });
    };

    return (
        <section className={styles.wrapper}>
            <form className={styles.formBlock} onSubmit={onSubmit} ref={formRef}>
                <Text
                    text="Информация добавится персонально, после чего проверится администратором и попадет в общий список для
                    всех пользователей"
                />
                <InputLight name="companyName" type="text" placeholder="Название компании" required={true} />
                <InputLight
                    name="linkVacancy"
                    type="text"
                    placeholder="Ссылка на вакансию (если есть)"
                    required={false}
                />
                <InputLight
                    name="description"
                    type="text"
                    placeholder="Описание (Интервью легкое, собеседующий душнил. Длительность собеса)"
                    required={false}
                />
                <RadioSelect array={difficultyArray} name="difficulty" textForSelect={`Сложность:`} />
                <RadioSelect array={typeOfInterview} name="typeOfInterview" textForSelect={`Формат собеседования: `} />
                <RadioSelect array={liveCodingArray} name="liveCoding" textForSelect={`LiveCoding (Был/Нет)`} />
                <Questions />
                <FieldForCodeSlice text="Добавить задачи с собеседования" icon={<FaRegFileCode />} />
                <DefaultButton text="Создать" />
            </form>
            <ErrorMessage errorMessage={errorMessage} isError={isError} setIsError={setIsError} />
            <SuccessMessage isSuccess={isSuccess} />
        </section>
    );
};

export default CompanyCreate;
