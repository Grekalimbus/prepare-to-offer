import { BASE_URL } from "@/configs/baseURL";
import { Company } from "@/types/company/company";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectCompanies {
    companies: Company[];
}

const useCompany = () => {
    const fetchPendingCompany = async () => {
        const { data } = await axios.get<OjbectCompanies>(`${BASE_URL}/company?status=PENDING`);
        return data.companies;
    };
    const dataCompanyPending = useQuery({
        queryKey: ["companiesPending"],
        queryFn: fetchPendingCompany,
    });
    const fetchAcceptCompany = async () => {
        const { data } = await axios.get<OjbectCompanies>(`${BASE_URL}/company?status=ACCEPT`);
        return data.companies;
    };
    const dataCompanyAccept = useQuery({
        queryKey: ["companiesAccept"],
        queryFn: fetchAcceptCompany,
    });

    return { dataCompanyPending, dataCompanyAccept };
};

export default useCompany;
