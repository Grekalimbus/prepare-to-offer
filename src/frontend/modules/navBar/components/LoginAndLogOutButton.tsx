import NavLink from "@/frontend/shared/ui/Buttons/NavLink/NavLink";
import { signOut, useSession } from "next-auth/react";

const LoginAndLogOutButton = () => {
    const session = useSession();
    return session?.data ? (
        <NavLink href="/" onClick={() => signOut({ callbackUrl: "/" })} text="Выход" />
    ) : (
        <NavLink href="/signIn" text="Вход / Регистрация" />
    );
};

export default LoginAndLogOutButton;
