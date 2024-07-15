import { Company } from "@/types/company/company";
import Link from "next/link";
import styles from "../CompaniesCards.module.css";

const generateColor = (text: string) => {
    if (text === "Легко") return "#7bfd01";
    if (text === "Средне") return "#eec200";
    if (text === "Сложно") return "#ee2400";
};

const TopSection = ({ company }: { company: Company }) => {
    return (
        <section className={styles.wrapperSection}>
            <div className={styles.point}>Название компании: {company.companyName}</div>
            {company.linkVacancy && (
                <div className={styles.point}>
                    Ссылка на вакансию:
                    <Link target="_blank" className={styles.linkVacancy} href={company.linkVacancy}>
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
    );
};

export default TopSection;
