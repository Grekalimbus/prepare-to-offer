"use client";

import useUser from "@/frontend/domains/user/useUser";
import styles from "./Button.module.css";

const AdminControls = () => {
    const { isAdmin } = useUser();
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
