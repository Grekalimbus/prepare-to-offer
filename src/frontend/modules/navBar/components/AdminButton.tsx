import useUser from "@/frontend/domains/user/useUser";
import Link from "next/link";
import styles from "../NavBar.module.css";

const AdminButton = () => {
    const { isAdmin } = useUser();

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
