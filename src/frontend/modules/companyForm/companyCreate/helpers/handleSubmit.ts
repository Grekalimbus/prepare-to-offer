import { BASE_URL } from "@/frontend/configs/baseURL";
import { Company } from "@/frontend/types/company/company";
import axios from "axios";
import { FormEvent } from "react";

interface Props {
    event: FormEvent<HTMLFormElement>;
    setErrorMessage: (value: string) => void;
    setIsError: (value: boolean) => void;
    email: string;
    handleUpdateUserCompany: (company: Company) => void;
    handleCreateCompany: ({ company, status }: { company: Company; status: string }) => void;
}

interface User {
    email: string;
    roles: string[];
}

const handleSubmit = async ({
    event,
    setErrorMessage,
    setIsError,
    email,
    handleUpdateUserCompany,
    handleCreateCompany,
}: Props) => {
    const formData = new FormData(event.currentTarget);
    const companyName = formData.get("companyName") as string;
    const linkVacancy = formData.get("linkVacancy") as string;
    const description = formData.get("description") as string;
    const difficulty = formData.getAll("difficulty")[0] as string;
    const liveCoding = formData.getAll("liveCoding")[0] as string;
    const typeOfInterview = formData.getAll("typeOfInterview")[0] as string;
    const questions = formData.getAll("question") as string[] | [];
    const sliceOfCode = (formData.get("sliceOfCode") as string) || "";
    const company = {
        companyName,
        linkVacancy,
        description,
        sliceOfCode,
        difficulty,
        liveCoding,
        questions,
        typeOfInterview,
    };
    if (!liveCoding || !typeOfInterview || !difficulty) {
        setErrorMessage("Выберите все обязательные опции (Сложность/Формат/LiveCoding)");
        setIsError(true);
        setTimeout(() => {
            setIsError(false);
        }, 3000);
    }
    if (difficulty && liveCoding && typeOfInterview) {
        let isAdmin: boolean = false;
        const { data: user } = await axios.get<User>(`${BASE_URL}/getUser?email=${email}`);
        user.roles.forEach(role => {
            if (role === "ADMIN") {
                isAdmin = true;
            }
        });

        handleUpdateUserCompany(company);

        if (isAdmin) {
            handleCreateCompany({ company, status: "ACCEPT" });
        }
        if (!isAdmin) {
            handleCreateCompany({ company, status: "PENDING" });
        }
    }
};

export default handleSubmit;
