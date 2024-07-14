"use client";
import useUser from "@/hooks/useUser";
import styles from "./Button.module.css";

const AdminControls = () => {
    const { dataUser } = useUser();
    const isAdmin = dataUser.data?.roles.includes("ADMIN");
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
