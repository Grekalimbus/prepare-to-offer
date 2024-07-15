import { Company } from "@/types/company/company";
import { usePathname } from "next/navigation";
import useCompany from "./useCompany";

interface CompanyHookReturn {
    company: Company[] | undefined;
    isLoading: boolean;
}

const useGetCompany = (): CompanyHookReturn => {
    const path = usePathname();
    const questionsPath = path.includes("/company/allCompany");
    if (questionsPath) {
        const { dataCompanyAccept } = useCompany();
        const company = dataCompanyAccept.data;
        const isLoading = dataCompanyAccept.isLoading;
        return { company, isLoading };
    }
    return { company: undefined, isLoading: false };
};

export default useGetCompany;
