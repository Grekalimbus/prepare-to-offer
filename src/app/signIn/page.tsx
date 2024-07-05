"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import InputAndLabel from "../ui/Input/InputAndLabel";
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
                <InputAndLabel
                    type={isFormStatus.email}
                    name="email"
                    inputType="text"
                    placeholder="email@gmail.com"
                    error={` Неверный email, используйте английские буквы и @gmail.com`}
                />
                <InputAndLabel
                    type={isFormStatus.password}
                    name="password"
                    inputType="password"
                    placeholder="Пароль"
                    error={` Неверный пароль, минимальная длина 4 и минимум 1 цифра`}
                />
                <InputAndLabel
                    type={isFormStatus.repeadPassword}
                    name="repeadPassword"
                    inputType="password"
                    placeholder="Повторите пароль"
                    error={`Пароли не сопадают`}
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
