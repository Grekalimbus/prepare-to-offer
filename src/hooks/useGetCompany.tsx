import { Company } from "@/types/company/company";
import { usePathname } from "next/navigation";
import useCompany from "./useCompany";
import useUser from "./useUser";

interface CompanyHookReturn {
    companies: Company[] | undefined;
    isLoading: boolean;
}

const useGetCompany = (): CompanyHookReturn => {
    const path = usePathname();
    const allCompany = path.includes("/company/allCompany");
    const myCompany = path.includes("/company/myCompany");
    if (allCompany) {
        const { dataCompanyAccept } = useCompany();
        const companies = dataCompanyAccept.data;
        const isLoading = dataCompanyAccept.isLoading;
        return { companies, isLoading };
    }
    if (myCompany) {
        const { dataUser } = useUser();
        const companies = dataUser.data?.companies;
        const isLoading = dataUser.isLoading;
        return { companies, isLoading };
    }
    return { companies: undefined, isLoading: false };
};

export default useGetCompany;
