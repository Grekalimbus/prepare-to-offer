import { Company } from "@/frontend/types/company/company";
import { FormEvent, RefObject } from "react";

interface Props {
    isAdmin: boolean;
    formRef: RefObject<HTMLFormElement>;
    event: FormEvent<HTMLFormElement>;
    setErrorMessage: (value: string) => void;
    setIsError: (value: boolean) => void;
    setIsSuccess: (value: boolean) => void;
    handleUpdateUserCompany: (company: Company) => void;
    handleCreateCompany: ({ company, status }: { company: Company; status: string }) => void;
}

const handleSubmit = async ({
    isAdmin,
    event,
    handleUpdateUserCompany,
    handleCreateCompany,
    setErrorMessage,
    setIsError,
    setIsSuccess,
    formRef,
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
    }
    if (difficulty && liveCoding && typeOfInterview) {
        if (isAdmin) {
            handleCreateCompany({ company, status: "ACCEPT" });
        }
        if (!isAdmin) {
            handleCreateCompany({ company, status: "PENDING" });
        }
        handleUpdateUserCompany(company);
        setIsError(false);
        setIsSuccess(true);
        formRef.current?.reset();
        setTimeout(() => {
            setIsSuccess(false);
        }, 1500);
    }
};

export default handleSubmit;
