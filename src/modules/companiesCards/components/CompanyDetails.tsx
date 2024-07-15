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
    status: string;
}

const CompanyDetails = ({ status }: Props) => {
    const { company, isLoading } = useGetCompany();

    if (isLoading) {
        return <LoadingSkeleton />;
    }
    return company?.map((company: Company) => {
        return (
            <div className={styles.companyCard} key={company._id}>
                <TopSection company={company} />
                <Questions company={company} />
                {company.sliceOfCode && <SliceOfCode company={company} />}
                <DateInfo company={company} />
                {status === "PENDING" && <AdminControls />}
            </div>
        );
    });
};

export default CompanyDetails;
