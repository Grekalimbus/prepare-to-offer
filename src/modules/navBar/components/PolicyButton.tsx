"use client";
import { usePolicyModal } from "@/app/store";
import styles from "../NavBar.module.css";
const PolicyButton = () => {
    const { setIsPolicy } = usePolicyModal();

    return (
        <button className={styles.navLink} onClick={setIsPolicy}>
            Политика конфиденциальности
        </button>
    );
};

export default PolicyButton;
