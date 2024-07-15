import Text from "@/frontend/shared/text/Text";
import { Company } from "@/frontend/types/company/company";
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
            <Text text={`Название компании: ${company.companyName}`} />

            {company.linkVacancy && (
                <Text text={`Ссылка на вакансию:`}>
                    <Link target="_blank" className={styles.linkVacancy} href={company.linkVacancy}>
                        {company.linkVacancy}
                    </Link>
                </Text>
            )}
            {company.description && <Text text={`Описание: ${company.description}`} />}
            <Text text={`Сложность:`}>
                <span style={{ color: generateColor(company.difficulty), fontWeight: "600" }}>
                    &nbsp;{company.difficulty}
                </span>
            </Text>
            <Text text={`Формат: ${company.typeOfInterview}`} />
            <Text text={`Лайфкодинг: ${company.liveCoding}`} />
        </section>
    );
};

export default TopSection;
