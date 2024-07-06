import { Company } from "@/types/company/company";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../CompanyCard.module.css";

interface Props {
    company: Company;
}

const CompanyDetails = ({ company }: Props) => {
    return (
        <div className={styles.companyCard}>
            <section className={styles.wrapperSectiion}>
                <div className={styles.point}>Название компании: {company.companyName}</div>
                {company.linkVacancy && <div className={styles.point}>Ссылка на вакансию: {company.linkVacancy}</div>}
                {company.description && <div className={styles.point}>Описание: {company.description}</div>}
                <div className={styles.point}>Сложность: {company.difficulty}</div>
                <div className={styles.point}>Формат: {company.typeOfInterview}</div>
                <div className={styles.point}>Лайфкодинг: {company.liveCoding}</div>
            </section>
            <div className={styles.wrapperSectiion}>
                <p className={styles.questions}>Вопросы с собеседования: </p>
                {company.questions.map((question, index) => (
                    <p key={question} className={styles.question}>
                        {index + 1}. &nbsp; {question}
                    </p>
                ))}
            </div>
            {company.sliceOfCode && (
                <div className={styles.wrapperSectiion}>
                    <p className={styles.questions}>Задачи: </p>
                    <SyntaxHighlighter customStyle={{ width: "100%" }} language="javascript" style={atomOneDark}>
                        {company.sliceOfCode}
                    </SyntaxHighlighter>
                </div>
            )}
            <div className={styles.wrapperSectiion}>Дата создания: {company.createdAt}</div>
        </div>
    );
};

export default CompanyDetails;
