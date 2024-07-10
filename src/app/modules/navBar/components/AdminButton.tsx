import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import styles from "../NavBar.module.css";

const AdminButton = () => {
    const user = useUser();
    const isAdmin = user.user?.roles.includes("ADMIN");

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
