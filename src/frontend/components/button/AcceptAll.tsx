"use client";

import useUser from "@/frontend/domains/user/useUser";
import styles from "./Button.module.css";
const AcceptAll = () => {
    const { isAdmin } = useUser();
    return isAdmin && <button className={styles.buttonAcceptAll}>Принять всё</button>;
};

export default AcceptAll;
