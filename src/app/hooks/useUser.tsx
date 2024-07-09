import { BASE_URL } from "@/configs/baseURL";
import { IUser } from "@/types/user/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const useUser = () => {
    const session = useSession();
    const email = session.data?.user?.email;
    const fetchData = async (email: string | null | undefined) => {
        if (email) {
            const { data } = await axios.get<IUser>(`${BASE_URL}/getUser?email=${email}`);
            return data;
        }
        return null;
    };
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`${email}getUser`],
        queryFn: () => fetchData(email),
    });
    return { user, isLoading, error };
};

export default useUser;
