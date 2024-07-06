import { Company } from "@/types/company/company";
import styles from "../CompanyCard.module.css";

interface Props {
    company: Company;
}

const CompanyDetails = ({ company }: Props) => {
    return (
        <div className={styles.companyCard}>
            <div className={styles.point}>Название компании: {company.companyName}</div>
            {company.linkVacancy && <div className={styles.point}>Ссылка на вакансию: {company.linkVacancy}</div>}
            {company.description && <div className={styles.point}>Описание: {company.description}</div>}
            <div className={styles.point}>Сложность: {company.difficulty}</div>
            <div className={styles.point}>Формат: {company.typeOfInterview}</div>
            <div className={styles.point}>Лайфкодинг: {company.liveCoding}</div>
            <div className={styles.point}>
                <p>Вопросы с собеседования: </p>
                {company.questions.map(question => (
                    <p key={question}>{question}</p>
                ))}
            </div>
            {company.sliceOfCode && <div className={styles.point}>Задачи: {company.sliceOfCode}</div>}
            <div className={styles.point}>Дата создания: {company.createdAt}</div>
        </div>
    );
};

export default CompanyDetails;
