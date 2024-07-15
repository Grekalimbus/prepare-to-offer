import { Company } from "@/types/company/company";
import { format, toZonedTime } from "date-fns-tz";
import styles from "../CompaniesCards.module.css";
const RussianTime = (dateString: string) => {
    const timeZone = "Europe/Moscow";
    const date = new Date(dateString);
    const zonedDate = toZonedTime(date, timeZone);
    const formattedDate = format(zonedDate, "dd.MM.yyyy", { timeZone });
    return formattedDate;
};

const DateInfo = ({ company }: { company: Company }) => {
    return <div className={styles.wrapperSection}>Дата создания: {RussianTime(company.createdAt)}</div>;
};

export default DateInfo;
