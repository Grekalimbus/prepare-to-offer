"use client";
import { usePolicyModal } from "@/app/store";
import styles from "../NavBar.module.css";
const PolicyButton = () => {
    const { setPolicyModal } = usePolicyModal();

    return (
        <button className={styles.navLink} onClick={() => setPolicyModal()}>
            Политика конфиденциальности
        </button>
    );
};

export default PolicyButton;
