"use client";
import { useFilterCompany } from "@/app/store";
import FilterForm from "@/frontend/shared/components/filterForm/FilterForm";
import WrapperCardContent from "@/frontend/shared/components/wrapperCardContent/WrapperCardContent";
import styles from "./CompaniesCards.module.css";
import CompanyDetails from "./components/CompanyDetails";
interface Props {
    status?: string;
}
const CompaniesCards = ({ status }: Props) => {
    const { setFilterValue } = useFilterCompany();
    return (
        <div className={styles.flexContainer}>
            <FilterForm setFilterValue={setFilterValue} />
            <WrapperCardContent status={status}>
                <CompanyDetails status={status} />
            </WrapperCardContent>
        </div>
    );
};

export default CompaniesCards;
