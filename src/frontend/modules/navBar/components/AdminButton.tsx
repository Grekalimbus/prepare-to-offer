import useUser from "@/frontend/hooks/useUser";
import Link from "next/link";
import styles from "../NavBar.module.css";

const AdminButton = () => {
    const { dataUser } = useUser();
    const isAdmin = dataUser.data?.roles.includes("ADMIN");

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
