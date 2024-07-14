"use client";
import { useAuthModal } from "@/app/store";
import Button from "@/ui/Buttons/Button";
import { useRouter } from "next/navigation";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./ModalAuth.module.css";

const ModalAuth = () => {
    const { authModal, setAuthModal } = useAuthModal();
    const router = useRouter();
    const routeToSignIn = (): void => {
        setAuthModal();
        router.push("/api/auth/signin?callbackUrl=%2FcompaniesPage");
    };
    return (
        <div className={`${styles.modalWrapper} ${authModal ? styles.active : ""}`}>
            <div className={styles.modalAuth}>
                <p className={styles.message}>
                    Войдите в акаунт чтобы <br /> продолжить
                </p>
                <IoCloseCircle onClick={setAuthModal} className={styles.buttonClose} />
                <Button text="Войти" onClick={() => routeToSignIn()} />
            </div>
        </div>
    );
};

export default ModalAuth;
