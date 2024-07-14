import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../NavBar.module.css";

const LoginAndLogOutButton = () => {
    const session = useSession();
    return session?.data ? (
        <Link href={"/"} onClick={() => signOut({ callbackUrl: "/" })} className={styles.navLink}>
            Выход
        </Link>
    ) : (
        <Link href="/signIn" className={styles.navLink}>
            Вход / Регистрация
        </Link>
    );
};

export default LoginAndLogOutButton;
