"use client";
import InputWithError from "@/frontend/shared/components/inputWithError/InputWithError";
import InputLight from "@/frontend/shared/ui/Input/inputLight/InputLight";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./Login.module.css";
import LowerSectionForm from "./components/LowerSectionForm";
import { handleSubmitForm } from "./helpers/handleSubmitForm";
export interface FormDataStatus {
    email: boolean | null;
}

const Login = () => {
    const [isFormStatus, setIsFormStatus] = useState<FormDataStatus>({
        email: null,
    });

    const router = useRouter();
    const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleSubmitForm({ event, setIsFormStatus, router });
    };

    return (
        <section className={styles.wrapperForm}>
            <form onSubmit={onSubmitHandler} className={styles.formSignIn}>
                <p className={styles.title}>Регистрация</p>
                <InputWithError
                    name="email"
                    type="text"
                    placeholder="email@gmail.com"
                    errorMessage="Неверный логин или пароль"
                    required={true}
                    isError={isFormStatus.email}
                />
                <InputLight name="password" type="password" placeholder="Пароль" required={true} />
                <LowerSectionForm />
            </form>
            <Link href={"/signIn"} className={styles.login}>
                Зарегистрироваться
            </Link>
        </section>
    );
};

export default Login;
