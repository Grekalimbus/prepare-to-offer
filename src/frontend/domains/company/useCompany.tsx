import { BASE_URL } from "@/frontend/configs/baseURL";
import { Company } from "@/frontend/types/company/company";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
interface NewCompany {
    status: string;
    company: Company;
}
const useCompany = () => {
    const session = useSession();
    const email = session.data?.user?.email;
    const queryClient = useQueryClient();

    // Добавить инфо о company персонально для пользователя
    const updateUserCompany = async (company: Company) => {
        const { data } = await axios.patch(`${BASE_URL}/userCompany`, { email, company });
        return data;
    };
    const userCompany = useMutation({
        mutationFn: updateUserCompany,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userCompanyUpdate"] }),
    });

    const handleUpdateUserCompany = (company: Company): void => {
        userCompany.mutate(company);
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

    return { handleUpdateUserCompany, handleCreateCompany };
};

export default useCompany;
