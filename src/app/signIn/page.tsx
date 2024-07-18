"use client";
import InputWithError from "@/frontend/shared/components/inputWithError/InputWithError";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./SignIn.module.css";
import LowerSectionForm from "./components/LowerSectionForm";
import { handleSubmit } from "./helpers/handleSubmitForm";
import { FormDataStatus } from "./types/types";

const SignIn = () => {
    const [isFormStatus, setIsFormStatus] = useState<FormDataStatus>({
        email: null,
        password: null,
        repeadPassword: null,
    });

    const router = useRouter();

    const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleSubmit({ event, setIsFormStatus, router });
    };
    return (
        <section className={styles.wrapperForm}>
            <form className={styles.formSignIn} onSubmit={onSubmitHandler}>
                <p className={styles.title}>Регистрация</p>
                <InputWithError
                    name="email"
                    type="text"
                    placeholder="email@gmail.com"
                    errorMessage="Неверный email, используйте английские буквы и @gmail.com"
                    required={true}
                    isError={isFormStatus.email}
                />
                <InputWithError
                    required={true}
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    isError={isFormStatus.password}
                    errorMessage="Неверный пароль, минимальная длина 4 и минимум 1 цифра"
                />
                <InputWithError
                    required={true}
                    name="repeadPassword"
                    type="password"
                    placeholder="Повторите пароль"
                    isError={isFormStatus.repeadPassword}
                    errorMessage="Пароли не сопадают"
                />

                <LowerSectionForm />
            </form>
            <Link href={"/login"} className={styles.login}>
                Войти
            </Link>
        </section>
    );
};

export default SignIn;
