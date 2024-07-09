import { BASE_URL } from "@/configs/baseURL";
import { Company } from "@/types/company/company";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectCompanies {
    companies: Company[];
}

const useGetCompanyPending = () => {
    const fetchData = async () => {
        const { data } = await axios.get<OjbectCompanies>(`${BASE_URL}/company?status=PENDING`);
        return data.companies;
    };
    const {
        data: companies,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["companiesPending"],
        queryFn: fetchData,
    });

    return { companies, isLoading, error };
};

export default useGetCompanyPending;
