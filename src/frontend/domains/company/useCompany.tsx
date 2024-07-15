import { BASE_URL } from "@/frontend/configs/baseURL";
import { Company } from "@/frontend/types/company/company";
import { IUser } from "@/frontend/types/user/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

interface NewCompany {
    status: string;
    company: Company;
}

interface OjbectCompanies {
    companies: Company[];
}

const useCompany = () => {
    const session = useSession();
    const email = session.data?.user?.email;
    const queryClient = useQueryClient();
    const path = usePathname();
    let companies, isLoading;
    // Добавить инфо о company персонально для юзера
    const updateUserCompany = async (company: Company) => {
        const { data } = await axios.patch(`${BASE_URL}/userCompany`, { email, company });
        return data;
    };
    const mutateUserCompany = useMutation({
        mutationFn: updateUserCompany,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userCompanyUpdate"] }),
    });

    const handleUpdateUserCompany = (company: Company): void => {
        mutateUserCompany.mutate(company);
    };

    //  Добавить инфо о company в общий пул
    const createCompany = async ({ company, status }: NewCompany) => {
        const data = await axios.post(`${BASE_URL}/company`, { ...company, status });
        return data;
    };
    const newCompany = useMutation({
        mutationFn: createCompany,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["createCompany"] }),
    });

    const handleCreateCompany = ({ company, status }: NewCompany): void => {
        newCompany.mutate({ company, status });
    };

    // Получить список company видный для всех пользователей
    const allCompanies = async () => {
        const { data } = await axios.get<OjbectCompanies>(`${BASE_URL}/company?status=ACCEPT`);
        return data.companies;
    };
    const dataCompanyAccept = useQuery({
        queryKey: ["allCompanies"],
        queryFn: allCompanies,
    });

    // Получить список company персонально для юзера
    const userCompany = async () => {
        if (email) {
            const { data } = await axios.get<IUser>(`${BASE_URL}/getUser?email=${email}`);
            const companies = data.companies;
            return companies;
        }
    };
    const dataUserCompany = useQuery({
        queryKey: [`dataUserCompany`],
        queryFn: userCompany,
        enabled: !!email,
    });

    // В зависимости от роута возвращаем разные company
    switch (true) {
        case path.includes("/company/myCompany"): {
            companies = dataUserCompany.data;
            isLoading = dataUserCompany.isLoading;
            break;
        }
        default: {
            companies = dataCompanyAccept.data;
            isLoading = dataCompanyAccept.isLoading;
        }
    }
    return { handleUpdateUserCompany, handleCreateCompany, companies, isLoading };
};

export default useCompany;
