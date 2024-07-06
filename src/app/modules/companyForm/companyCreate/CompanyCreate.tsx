import ErrorMessage from "@/app/components/errorMessage/ErrorMessage";
import FieldForCodeSlice from "@/app/components/fieldForCodeSlice/FieldForCodeSlice";
import RadioSelect from "@/app/components/radioSelect/RadioSelect";
import Button from "@/app/ui/Buttons/Button";
import Input from "@/app/ui/Input/Input";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./CompanyCreate.module.css";
import Questions from "./components/Questions";
import handleSubmit from "./helpers/handleSubmit";

const CompanyCreate = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const session = useSession();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (session.data?.user?.email) {
            const email = session.data.user?.email;
            await handleSubmit({ event, setErrorMessage, setIsError, email });
        }
    };

    const difficultyArray = [
        { text: "Легко", value: "Легко" },
        { text: "Средне", value: "Средне" },
        { text: "Сложно", value: "Сложно" },
    ];
    const liveCodingArray = [
        { text: "Был", value: "Был" },
        { text: "Был", value: "Не был" },
    ];
    const typeOfInterview = [
        { text: "Скрининг", value: "Скрининг" },
        { text: "Технический", value: "Технический" },
        { text: "Другой", value: "Другой" },
    ];
    return (
        <section className={styles.wrapper}>
            <form className={styles.formBlock} onSubmit={onSubmit}>
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
