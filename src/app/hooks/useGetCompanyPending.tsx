import { BASE_URL } from "@/configs/baseURL";
import { Company } from "@/types/company/company";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OjbectCompany {
    companies: Company[];
}

const useGetCompanyPending = () => {
    const fetchData = async () => {
        const { data } = await axios.get<OjbectCompany>(`${BASE_URL}/company?status=PENDING`);
        return data.companies;
    };
    const {
        data: companiesPending,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["companyPending"],
        queryFn: fetchData,
    });

    return { companiesPending, isLoading, error };
};

export default useGetCompanyPending;
