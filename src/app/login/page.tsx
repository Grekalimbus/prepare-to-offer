"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import styles from "./Login.module.css";
const Login = () => {
    return (
        <section className={styles.wrapperForm}>
            <form className={styles.formSignIn}>
                <p className={styles.title}>Регистрация</p>
                <input placeholder="email@gmail.com" className={styles.input} name="email" type="text" required />
                <input placeholder="password" className={styles.input} name="password" type="password" required />

                <button className={styles.buttonSubmit}>Войти</button>
                <div className={styles.separator}>
                    <span className={styles.separatorElem}></span>
                    <span className={styles.separatorText}>OR</span>
                    <span className={styles.separatorElem}></span>
                </div>
                <button className={styles.buttonGoogle} onClick={() => signIn("google", { callbackUrl: "/" })}>
                    Продолжить с Google
                </button>
            </form>
            <Link href={"/signIn"} className={styles.login}>
                Зарегистрироваться
            </Link>
        </section>
    );
};

export default Login;
