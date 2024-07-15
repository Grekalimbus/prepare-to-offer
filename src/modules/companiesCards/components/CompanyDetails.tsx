"use client";
import AdminControls from "@/components/button/AdminControls";

import { Company } from "@/types/company/company";

import LoadingSkeleton from "@/components/loading/LoadingSkeleton";
import useGetCompany from "@/hooks/useGetCompany";
import styles from "../CompaniesCards.module.css";
import DateInfo from "./DateInfo";
import Questions from "./Questions";
import SliceOfCode from "./SliceOfCode";
import TopSection from "./TopSection";
interface Props {
    status?: string;
}

const CompanyDetails = ({ status }: Props) => {
    const { companies, isLoading } = useGetCompany();

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    return (
        <>
            {companies?.length === 0 && (
                <div className={styles.dummy}>
                    В этой секции пусто
                    <br />
                    Вероятно, вы еще не создавали карточки с инфомрацией
                </div>
            )}
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
