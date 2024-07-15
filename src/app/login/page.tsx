"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import InputAndLabel from "../../frontend/components/input/InputAndLabel";
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
                <InputAndLabel
                    type={isFormStatus.email}
                    name="email"
                    inputType="text"
                    placeholder="email@gmail.com"
                    error={`Неверный логин или пароль`}
                />
                <InputAndLabel name="password" inputType="password" placeholder="Пароль" />

                <LowerSectionForm />
            </form>
            <Link href={"/signIn"} className={styles.login}>
                Зарегистрироваться
            </Link>
        </section>
    );
};

export default Login;
