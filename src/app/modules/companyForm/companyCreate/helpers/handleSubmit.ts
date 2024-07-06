import { BASE_URL } from "@/configs/baseURL";
import axios from "axios";
import { FormEvent } from "react";

interface Props {
    event: FormEvent<HTMLFormElement>;
    setErrorMessage: (value: string) => void;
    setIsError: (value: boolean) => void;
    email: string;
}

interface User {
    email: string;
    roles: string[];
}

const handleSubmit = async ({ event, setErrorMessage, setIsError, email }: Props) => {
    const formData = new FormData(event.currentTarget);
    const companyName = formData.get("companyName");
    const linkVacancy = formData.get("linkVacancy");
    const description = formData.get("description");
    const difficulty = formData.getAll("difficulty")[0];
    const liveCoding = formData.getAll("liveCoding")[0];
    const questions = formData.getAll("question");
    const sliceOfCode = formData.get("sliceOfCode") || "";
    const completeData = { companyName, linkVacancy, description, sliceOfCode, difficulty, liveCoding, questions };
    if (!liveCoding) {
        setErrorMessage("Нужно выбрать 1 из вариантов раздела LiveCoding");
        setIsError(true);
        setTimeout(() => {
            setIsError(false);
        }, 2500);
    }
    if (!difficulty) {
        setErrorMessage("Нужно выбрать сложность из списка");
        setIsError(true);
        setTimeout(() => {
            setIsError(false);
        }, 2500);
    }
    if (difficulty && liveCoding) {
        let isAdmin: boolean = false;
        const { data: user } = await axios.get<User>(`${BASE_URL}/getUser?email=${email}`);
        user.roles.forEach(role => {
            if (role === "ADMIN") {
                isAdmin = true;
            }
        });
        await axios.patch(`${BASE_URL}/userCompany`, { email, company: completeData });
        if (isAdmin) {
            await axios.post(`${BASE_URL}/company`, {
                ...completeData,
                status: "ACCEPT",
            });
        }
        if (!isAdmin) {
            await axios.post(`${BASE_URL}/company`, {
                ...completeData,
                status: "PENDING",
            });
        }
    }
};

export default handleSubmit;
