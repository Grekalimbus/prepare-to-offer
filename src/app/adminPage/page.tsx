"use client";
import { BASE_URL } from "@/configs/baseURL";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import CategoryActionNav from "./components/CategoryActionNav";
import SelectCategoryButtons from "./components/SelectCategoryButtons";

interface User {
    email: string;
    roles: string[];
}

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const session = useSession();
    useEffect(() => {
        if (session.data) {
            const email = session.data.user?.email;
            const fetchUser = async () => {
                const { data: user } = await axios.post<User>(`${process.env.BASE_URL || BASE_URL}/getUser`, { email });
                user.roles.forEach(role => {
                    if (role === "ADMIN") {
                        setIsAdmin(true);
                    }
                });
            };
            fetchUser();
        }
    }, [session]);
    return !isAdmin ? (
        <div>Доступно только администраторам</div>
    ) : (
        <div className={styles.wrapper}>
            <SelectCategoryButtons />
            <section className={styles.flexContainer}>
                <CategoryActionNav />
            </section>
        </div>
    );
};

export default AdminPage;
