"use client";
import Button from "@/app/ui/Buttons/Button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ButtonsLogin = () => {
    const session = useSession();
    const router = useRouter();
    return !session.data ? (
        <>
            <Button text={"Вход"} onClick={() => router.push("/login")} />
            <Button text={"Регистрация"} onClick={() => router.push("/signIn")} />
        </>
    ) : (
        <Button text={"Выйти"} onClick={() => signOut({ callbackUrl: "/" })} />
    );
};

export default ButtonsLogin;
