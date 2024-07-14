"use client";
import useUser from "@/hooks/useUser";
import styles from "./Button.module.css";
const AcceptAll = () => {
    const user = useUser();
    const isAdmin = user.user?.roles.includes("ADMIN");
    return isAdmin && <button className={styles.buttonAcceptAll}>Принять всё</button>;
};

export default AcceptAll;
