import { Company } from "@/types/company/company";
import { format, toZonedTime } from "date-fns-tz";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../CompanyCard.module.css";
interface Props {
    company: Company;
    isAdmin: boolean;
    status: string;
}

const RussianTime = (dateString: string) => {
    const timeZone = "Europe/Moscow";
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, timeZone);
    const formattedDate = format(zonedDate, "dd.MM.yyyy", { timeZone });

    return formattedDate;
};

const CompanyDetails = ({ company, isAdmin, status }: Props) => {
    const generateColor = (text: string) => {
        if (text === "Легко") return "#7bfd01";
        if (text === "Средне") return "#eec200";
        if (text === "Сложно") return "#ee2400";
    };
    return (
        <div className={styles.companyCard}>
            <section className={styles.wrapperSectiion}>
                <div className={styles.point}>Название компании: {company.companyName}</div>
                {company.linkVacancy && (
                    <div className={styles.point}>
                        Ссылка на вакансию:{" "}
                        <Link className={styles.linkVacancy} href={company.linkVacancy}>
                            {company.linkVacancy}
                        </Link>
                    </div>
                )}
                {company.description && <div className={styles.point}>Описание: {company.description}</div>}
                <div className={styles.point}>
                    Сложность:
                    <span style={{ color: generateColor(company.difficulty), fontWeight: "600" }}>
                        &nbsp;{company.difficulty}
                    </span>
                </div>
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
                    <SyntaxHighlighter
                        customStyle={{ width: "100%", borderRadius: "6px" }}
                        language="javascript"
                        style={atomOneDark}
                    >
                        {company.sliceOfCode}
                    </SyntaxHighlighter>
                </div>
            )}
            {company.createdAt && (
                <div className={styles.wrapperSectiion}>Дата создания: {RussianTime(company.createdAt)}</div>
            )}
            {status === "PENDING" && isAdmin && (
                <div className={styles.flexButtonContainer}>
                    <button className={styles.buttonInFlex}>Отклонить заявку</button>
                    <button className={styles.buttonInFlex}>Принять</button>
                </div>
            )}
        </div>
    );
};

export default CompanyDetails;
