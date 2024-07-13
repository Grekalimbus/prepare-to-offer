"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../MainHeader.module.css";

const ButtonsLogin = () => {
    const session = useSession();

    return !session.data ? (
        <>
            <Link className={styles.link} href={"/login"}>
                Вход
            </Link>
            <Link className={styles.link} href={"/signIn"}>
                Регистрация
            </Link>
        </>
    ) : (
        <Link className={styles.link} href={"/"}>
            Выйти
        </Link>
    );
};

export default ButtonsLogin;
