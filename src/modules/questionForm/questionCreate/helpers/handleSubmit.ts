import { BASE_URL } from "@/configs/baseURL";
import axios from "axios";
import { FormEvent, RefObject } from "react";

interface Props {
    event: FormEvent<HTMLFormElement>;
    setErrorMessage: (value: string) => void;
    setIsError: (value: boolean) => void;
    email: string;
    formRef: RefObject<HTMLFormElement>;
}

interface User {
    email: string;
    roles: string[];
}

const handleSubmit = async ({ event, setErrorMessage, setIsError, email, formRef }: Props) => {
    const formData = new FormData(event.currentTarget);
    const question = formData.get("question");
    const answer = formData.get("answer");
    const sliceOfCode = formData.get("sliceOfCode") || "";
    const link = formData.getAll("link");
    const checkbox = formData.get("checkbox");
    const technology = formData.get("technology");
    const completeData = { question, answer, sliceOfCode, link, technology };
    if (!technology) {
        setErrorMessage("Чтобы отправить форму, выберите технологию из списка");
        setIsError(true);
        setTimeout(() => {
            setIsError(false);
        }, 2500);
    }
    if (technology && !checkbox) {
        await axios.patch(`${BASE_URL}/userQuestion`, { email, question: completeData });
        formRef.current?.reset();
    }
    if (technology && checkbox) {
        let isAdmin: boolean = false;
        const { data: user } = await axios.get<User>(`${BASE_URL}/getUser?email=${email}`);
        user.roles.forEach(role => {
            if (role === "ADMIN") {
                isAdmin = true;
            }
        });
        await axios.patch(`${BASE_URL}/userQuestion`, { email, question: completeData });
        if (isAdmin) {
            await axios.post(`${BASE_URL}/questions/${completeData.technology}Question`, {
                ...completeData,
                status: "ACCEPT",
            });
            formRef.current?.reset();
        }
        if (!isAdmin) {
            await axios.post(`${BASE_URL}/questions/pendingQuestion`, completeData);
            await axios.post(`${BASE_URL}/questions/${completeData.technology}Question`, {
                ...completeData,
                status: "PENDING",
            });
            formRef.current?.reset();
        }
    }
};

export default handleSubmit;