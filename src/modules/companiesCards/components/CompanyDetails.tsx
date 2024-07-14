"use client";
import AdminControls from "@/components/button/AdminControls";
import useGetCompanyPending from "@/hooks/useGetCompanyPending";
import { Company } from "@/types/company/company";
import { format, toZonedTime } from "date-fns-tz";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import LoadingSkeleton from "@/components/loading/LoadingSkeleton";
import styles from "../CompaniesCards.module.css";
interface Props {
    status: string;
}
const RussianTime = (dateString: string) => {
    const timeZone = "Europe/Moscow";
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, timeZone);
    const formattedDate = format(zonedDate, "dd.MM.yyyy", { timeZone });
    return formattedDate;
};
const currentURL = "/adminPage/section/companies/navAction/incoming";
const CompanyDetails = ({ status }: Props) => {
    const path = usePathname();
    const isIncoming = path.includes(currentURL);
    const companies = useGetCompanyPending();
    const incomingCompanies = isIncoming ? useGetCompanyPending() : { companies: undefined, isLoading: false };
    const { companies: companiesPending, isLoading: isPendingCompanyLoad } = incomingCompanies;

    const companiesToMap = incomingCompanies ? companiesPending : companiesPending;
    const isLoadingData = incomingCompanies ? isPendingCompanyLoad : isPendingCompanyLoad;
    const generateColor = (text: string) => {
        if (text === "Легко") return "#7bfd01";
        if (text === "Средне") return "#eec200";
        if (text === "Сложно") return "#ee2400";
    };
    if (isLoadingData) {
        return <LoadingSkeleton />;
    }
    return (
        <div className={styles.companyCard}>
            {companiesToMap?.map((company: Company) => {
                return (
                    <div key={company._id}>
                        <section className={styles.wrapperSection}>
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
                        <div className={styles.wrapperSection}>
                            <p className={styles.questions}>Вопросы с собеседования: </p>
                            {company.questions.map((question, index) => (
                                <p key={question} className={styles.question}>
                                    {index + 1}. &nbsp; {question}
                                </p>
                            ))}
                        </div>
                        {company.sliceOfCode && (
                            <div className={styles.wrapperSection}>
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
                            <div className={styles.wrapperSection}>Дата создания: {RussianTime(company.createdAt)}</div>
                        )}
                        {status === "PENDING" && <AdminControls />}
                    </div>
                );
            })}
        </div>
    );
};

export default CompanyDetails;
