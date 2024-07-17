"use client";
import { BASE_URL } from "@/frontend/configs/baseURL";
import { IUser } from "@/frontend/types/user/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const useUser = () => {
    const session = useSession();
    const email = session.data?.user?.email;

    const fetchData = async () => {
        const { data } = await axios.get<IUser>(`${BASE_URL}/getUser?email=${email}`);
        return data;
    };
    const dataUser = useQuery({
        queryKey: [`getUser${email}`],
        queryFn: fetchData,
        enabled: !!email,
    });
    const isAdmin = dataUser.data?.roles[0] === "ADMIN" ? true : false;

    return { dataUser, isAdmin };
};

export default useUser;
