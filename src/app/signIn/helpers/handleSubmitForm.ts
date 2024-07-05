import { BASE_URL } from "@/configs/baseURL";
import axios from "axios";
import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";
import { FormDataStatus } from "../types/types";
import { checkIsFormStatus } from "./checkIsFormStatus";

interface Props {
    event: FormEvent<HTMLFormElement>;
    setIsFormStatus: (prevState: FormDataStatus | ((prevState: FormDataStatus) => FormDataStatus)) => void;
    router: AppRouterInstance;
}

export const handleSubmit = async ({ event, setIsFormStatus, router }: Props) => {
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const repeadPassword = formData.get("repeadPassword") as string;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*\d).{5,}$/;
    const validData = checkIsFormStatus({
        email,
        password,
        repeadPassword,
        emailRegex,
        passwordRegex,
        setIsFormStatus,
    });

    if (!validData) return;

    await axios.post(`${BASE_URL}/users`, {
        email,
        password,
    });
    const user = await axios.get(`${BASE_URL}/getUser?email=${email}`);
    if (!user) return;

    const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
    });
    if (res && !res.error) {
        router.push("/");
    } else {
        console.log("res", res);
    }
};
