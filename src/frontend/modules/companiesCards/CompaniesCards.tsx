import WrapperCardContent from "@/frontend/shared/components/wrapperCardContent/WrapperCardContent";
import styles from "./CompaniesCards.module.css";
import CompanyDetails from "./components/CompanyDetails";
interface Props {
    status?: string;
}
const CompaniesCards = ({ status }: Props) => {
    return (
        <div className={styles.flexContainer}>
            <WrapperCardContent status={status}>
                <CompanyDetails status={status} />
            </WrapperCardContent>
        </div>
    );
};

export default CompaniesCards;
