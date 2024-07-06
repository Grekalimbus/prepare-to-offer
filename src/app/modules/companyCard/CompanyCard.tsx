import { Company } from "@/types/company/company";
import styles from "./CompanyCard.module.css";
import CompanyDetails from "./components/CompanyDetails";
interface Props {
    companies:
        | {
              companiesPending: Company[] | undefined;
              isLoading: boolean;
              error: Error | null;
          }
        | undefined;
}

const CompanyCard = ({ companies }: Props) => {
    console.log("companies?.companiesPending", companies?.companiesPending);
    if (companies?.isLoading) {
        return <div>LOADING</div>;
    }
    if (companies?.error) {
        return <div>ERROR</div>;
    }
    if (companies?.companiesPending !== undefined) {
        return (
            <section className={styles.commonWrapper}>
                <div className={styles.wrapperCompany}>
                    {companies.companiesPending.map(company => (
                        <CompanyDetails key={company._id} company={company} />
                    ))}
                </div>
            </section>
        );
    }
};

export default CompanyCard;
