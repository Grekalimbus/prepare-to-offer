import { Company } from "@/types/company/company";
import styles from "./CompaniesCards.module.css";
import CompanyDetails from "./components/CompanyDetails";
interface Props {
    companies:
        | {
              companiesPending: Company[] | undefined;
              isLoading: boolean;
              error: Error | null;
          }
        | undefined;
    status: string;
    isAdmin: boolean;
}

const CompaniesCards = ({ companies, status, isAdmin }: Props) => {
    console.log("companies?.companiesPending", companies?.companiesPending);
    if (companies?.isLoading) {
        return <div>LOADING</div>;
    }
    if (companies?.error) {
        return <div>ERROR</div>;
    }
    if (companies?.companiesPending !== undefined) {
        return (
            <div className={styles.flexContainer}>
                <section className={styles.commonWrapper}>
                    <div className={styles.wrapperCompany}>
                        {companies.companiesPending.map(company => (
                            <CompanyDetails status={status} isAdmin={isAdmin} key={company._id} company={company} />
                        ))}
                    </div>
                    {status === "PENDING" && isAdmin && (
                        <button className={styles.buttonAcceptAll}>Принять все заявки</button>
                    )}
                </section>
            </div>
        );
    }
};

export default CompaniesCards;
