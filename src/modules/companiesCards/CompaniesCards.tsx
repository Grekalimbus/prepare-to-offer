import AcceptAll from "@/components/button/AcceptAll";
import styles from "./CompaniesCards.module.css";
import CompanyDetails from "./components/CompanyDetails";
interface Props {
    status: string;
}
const CompaniesCards = ({ status }: Props) => {
    return (
        <div className={styles.flexContainer}>
            <section className={styles.commonWrapper}>
                <div className={styles.wrapperCompany}>
                    <CompanyDetails status={status} />
                </div>
                {status === "PENDING" && <AcceptAll />}
            </section>
        </div>
    );
};

export default CompaniesCards;
