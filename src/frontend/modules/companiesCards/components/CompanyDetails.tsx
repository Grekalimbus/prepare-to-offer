"use client";
import AdminControls from "@/frontend/components/button/AdminControls";
import LoadingSkeleton from "@/frontend/components/loading/LoadingSkeleton";
import useCompany from "@/frontend/domains/company/useCompany";
import WrapperMessage from "@/frontend/shared/wrapperMessage/WrapperMessage";
import { Company } from "@/frontend/types/company/company";
import styles from "../CompaniesCards.module.css";
import DateInfo from "./DateInfo";
import Questions from "./Questions";
import SliceOfCode from "./SliceOfCode";
import TopSection from "./TopSection";
interface Props {
    status?: string;
}

const CompanyDetails = ({ status }: Props) => {
    const { companies, isLoading } = useCompany();

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    return (
        <>
            {companies?.length === 0 && <WrapperMessage message="В этой секции пусто / Выберите другую секцию" />}
            {companies?.map((company: Company) => {
                return (
                    <div className={styles.companyCard} key={company._id}>
                        <TopSection company={company} />
                        <Questions company={company} />
                        {company.sliceOfCode && <SliceOfCode company={company} />}
                        <DateInfo company={company} />
                        {status === "PENDING" && <AdminControls />}
                    </div>
                );
            })}
        </>
    );
};

export default CompanyDetails;
