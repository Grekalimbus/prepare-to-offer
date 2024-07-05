import { BASE_URL } from "@/configs/baseURL";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../NavBar.module.css";

interface Props {
    email: string | null | undefined;
}

interface User {
    email: string;
    roles: string[];
}

const AdminButton = ({ email }: Props) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    useEffect(() => {
        if (email) {
            const fetchUser = async () => {
                const { data: user } = await axios.get<User>(`${BASE_URL}/getUser?email=${email}`);
                user.roles.forEach(role => {
                    if (role === "ADMIN") {
                        setIsAdmin(true);
                    }
                });
            };
            fetchUser();
        }
    }, [email]);
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
