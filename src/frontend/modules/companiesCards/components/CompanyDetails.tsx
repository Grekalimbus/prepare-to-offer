"use client";
import { useFilterCompany } from "@/app/store";
import useCompany from "@/frontend/domains/company/useCompany";
import useUser from "@/frontend/domains/user/useUser";
import LoadingSkeleton from "@/frontend/shared/components/loadingSkeleton/LoadingSkeleton";
import WrapperMessage from "@/frontend/shared/components/wrapperMessage/WrapperMessage";
import { Company } from "@/frontend/types/company/company";
import AdminControls from "@/frontend/ui/Buttons/adminControls/AdminControls";
import { useEffect } from "react";
import styles from "../CompaniesCards.module.css";
import { handleFilterCompany } from "../helpers/handleFilterCompany";
import DateInfo from "./DateInfo";
import Questions from "./Questions";
import SliceOfCode from "./SliceOfCode";
import TopSection from "./TopSection";
interface Props {
    status?: string;
}

const CompanyDetails = ({ status }: Props) => {
    const { companies, isLoading } = useCompany();
    const { filterValue, setFilterValue } = useFilterCompany();
    const filterCompany = handleFilterCompany(companies, filterValue);
    const { isAdmin } = useUser();

    // useEffect - Для очистки фильтрации при смене роута
    useEffect(() => {
        setFilterValue("");
    }, []);

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    return (
        <>
            {filterCompany?.length === 0 && (
                <WrapperMessage message="В этой секции пусто / Выберите другую технологию из списка" />
            )}
            {filterCompany?.map((company: Company) => {
                return (
                    <div className={styles.companyCard} key={company._id}>
                        <TopSection company={company} />
                        <Questions company={company} />
                        {company.sliceOfCode && <SliceOfCode company={company} />}
                        <DateInfo company={company} />
                        {status === "PENDING" && isAdmin && <AdminControls />}
                    </div>
                );
            })}
        </>
    );
};

export default CompanyDetails;
