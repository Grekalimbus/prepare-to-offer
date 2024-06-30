"use client";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const router = useRouter();
    const session = useSession();
    useEffect(() => {
        if (session.data) router.push("/");
    }, [session.data]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("email", email);

        await axios.post(`${process.env.BASE_URL}/users`, {
            email,
            password,
        });
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
    return (
        <section className={styles.wrapperForm}>
            <form className={styles.formSignIn} onSubmit={handleSubmit}>
                <p className={styles.title}>Регистрация</p>
                <input placeholder="email@gmail.com" className={styles.input} name="email" type="text" required />
                <input placeholder="password" className={styles.input} name="password" type="password" required />
                <input
                    placeholder="repead password"
                    className={styles.input}
                    name="repeadPassword"
                    type="password"
                    required
                />
                <p className={styles.titleWarning}>
                    Вы соглашаетесь с нашими Условиями использования и подтверждаете, что прочитали и поняли нашу
                    <span className={styles.span}>Политику конфиденциальности</span>. Ваши данные будут использоваться в
                    соответствии с этой политикой для обеспечения безопасности и улучшения качества наших услуг.
                </p>
                <button className={styles.buttonSubmit}>Зарегистрироваться</button>
                <div className={styles.separator}>
                    <span className={styles.separatorElem}></span>
                    <span className={styles.separatorText}>OR</span>
                    <span className={styles.separatorElem}></span>
                </div>
                <button className={styles.buttonGoogle} onClick={() => signIn("google", { callbackUrl: "/" })}>
                    Продолжить с Google
                </button>
            </form>
            <Link href={"/login"} className={styles.login}>
                Войти
            </Link>
        </section>
    );
};

export default SignIn;
