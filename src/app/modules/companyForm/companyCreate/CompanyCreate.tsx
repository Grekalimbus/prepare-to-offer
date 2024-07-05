import FieldForCodeSlice from "@/app/components/fieldForCodeSlice/FieldForCodeSlice";
import RadioSelect from "@/app/components/radioSelect/RadioSelect";
import Button from "@/app/ui/Buttons/Button";
import Input from "@/app/ui/Input/Input";
import { FormEvent } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./CompanyCreate.module.css";
import Questions from "./components/Questions";

const CompanyCreate = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const companyName = formData.get("companyName");
        const linkVacancy = formData.get("linkVacancy");
        const description = formData.get("description");
        const sliceOfCode = formData.get("sliceOfCode");
        const question = formData.getAll("question");
        const difficulty = formData.get("difficulty");
        const liveCoding = formData.get("liveCoding");
        console.log("question", {
            companyName,
            linkVacancy,
            description,
            sliceOfCode,
            question,
            difficulty,
            liveCoding,
        });
    };
    const difficultyArray = [
        { text: "Легко", value: "easy" },
        { text: "Средне", value: "medium" },
        { text: "Сложно", value: "hard" },
    ];
    const liveCodingArray = [
        { text: "Был", value: "yes" },
        { text: "Не был", value: "no" },
    ];
    return (
        <section className={styles.wrapper}>
            <form className={styles.formBlock} onSubmit={handleSubmit}>
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
                <RadioSelect array={liveCodingArray} name="liveCoding" textForSelect={`LiveCoding (Был/Нет)`} />
                <Questions />
                <FieldForCodeSlice text="Добавить задачи с собеседования" icon={<FaRegFileCode />} />
                <Button text="Создать" />
            </form>
        </section>
    );
};

export default CompanyCreate;
