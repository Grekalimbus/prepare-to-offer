"use client";
import useUser from "@/frontend/hooks/useUser";
import styles from "./Button.module.css";
const AcceptAll = () => {
    const { dataUser } = useUser();
    const isAdmin = dataUser.data?.roles.includes("ADMIN");
    return isAdmin && <button className={styles.buttonAcceptAll}>Принять всё</button>;
};

export default AcceptAll;
