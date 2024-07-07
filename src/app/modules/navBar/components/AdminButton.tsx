import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import styles from "../NavBar.module.css";

interface Props {
    email: string | null | undefined;
}

interface User {
    email: string;
    roles: string[];
}

const AdminButton = ({ email }: Props) => {
    const user = useUser({ email });
    const isAdmin = user.user?.roles[0] === "ADMIN" ? true : false;

    return (
        <>
            {isAdmin && (
                <Link href={"/adminPage"} className={styles.navLink}>
                    Админка
                </Link>
            )}
        </>
    );
};

export default AdminButton;
