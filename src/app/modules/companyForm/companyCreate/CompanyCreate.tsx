import Button from "@/app/ui/Buttons/Button";
import FieldForCodeSlice from "@/app/ui/fieldForCodeSlice/FieldForCodeSlice";
import Input from "@/app/ui/Input/Input";
import { FormEvent } from "react";
import { FaRegFileCode } from "react-icons/fa";
import styles from "./CompanyCreate.module.css";
import Questions from "./components/Questions";
import SelectField from "./components/SelectField";

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
                <SelectField array={difficultyArray} name="difficulty" textForSelect={`Сложность:`} />
                <SelectField array={liveCodingArray} name="liveCoding" textForSelect={`LiveCoding (Был/Нет)`} />
                <Questions />
                <FieldForCodeSlice text="Добавить задачи с собеседования" icon={<FaRegFileCode />} />
                <Button text="Создать" />
            </form>
        </section>
    );
};

export default CompanyCreate;
