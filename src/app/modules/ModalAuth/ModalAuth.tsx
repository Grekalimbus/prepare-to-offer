"use client";
import Button from "@/app/ui/Buttons/Button";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./ModalAuth.module.css";
import { ModalAuthContext } from "./ModalAuthContext";

const ModalAuth = () => {
    const { isModalActive, setIsModalActive } = useContext(ModalAuthContext);
    const router = useRouter();
    const routeToSignIn = (): void => {
        setIsModalActive(prev => !prev);
        router.push("/api/auth/signin");
    };
    return (
        <div className={`${styles.modalWrapper} ${isModalActive ? styles.active : ""}`}>
            <div className={styles.modalAuth}>
                <p className={styles.message}>
                    Войдите в акаунт чтобы <br /> продолжить
                </p>
                <IoCloseCircle onClick={() => setIsModalActive(prev => !prev)} className={styles.buttonClose} />
                <Button text="Войти" onClick={() => routeToSignIn()} />
            </div>
        </div>
    );
};

export default ModalAuth;
