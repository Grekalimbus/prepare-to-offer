"use client";
import useUser from "@/hooks/useUser";
import styles from "./Button.module.css";

const AdminControls = () => {
    const user = useUser();
    const isAdmin = user.user?.roles.includes("ADMIN");
    return (
        isAdmin && (
            <div className={styles.flexButtonContainer}>
                <button className={styles.buttonInFlex}>Отклонить заявку</button>
                <button className={styles.buttonInFlex}>Принять</button>
            </div>
        )
    );
};

export default AdminControls;
