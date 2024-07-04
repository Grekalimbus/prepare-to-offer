import CustomInput from "@/app/ui/Input/CustomInput";
import { FormEvent } from "react";
import styles from "./CompanyCreate.module.css";

const CompanyCreate = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <section className={styles.wrapper}>
            <form className={styles.formBlock} onSubmit={handleSubmit}>
                <CustomInput name="companyName" inputType="text" placeholder="Название компании" required={true} />
                <CustomInput
                    name="companyName"
                    inputType="linkVacancy"
                    placeholder="Ссылка на вакансию (если есть)"
                    required={false}
                />
                <CustomInput
                    name="description"
                    inputType="text"
                    placeholder="Описание (доп. информация)"
                    required={false}
                />
            </form>
        </section>
    );
};

export default CompanyCreate;
