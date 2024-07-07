import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { IUser } from "@/types/user/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Props {
    email: string | null | undefined;
    question?: Question;
}

const useUser = ({ email, question }: Props) => {
    const queryClient = useQueryClient();
    const fetchData = async (email: string | null | undefined) => {
        if (email) {
            const { data } = await axios.get<IUser>(`${BASE_URL}/getUser?email=${email}`);
            return data;
        }
    };
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`getUser`],
        queryFn: () => fetchData(email),
    });
    return { user, isLoading, error };
};

export default useUser;
