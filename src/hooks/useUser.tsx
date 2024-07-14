import { useTechnologyNav } from "@/app/store";
import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { IUser } from "@/types/user/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useUser = () => {
    const session = useSession();
    const email = session.data?.user?.email;
    const { technology } = useTechnologyNav();

    const fetchData = async () => {
        if (email) {
            const { data } = await axios.get<IUser>(`${BASE_URL}/getUser?email=${email}`);
            return data;
        }
    };
    const fetchMyQuestions = async () => {
        if (email) {
            const { data } = await axios.get<Question[]>(
                `${BASE_URL}/getUser/queastions?email=${email}&question=${technology}`,
            );
            return data;
        }
    };
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`getUser${email}`],
        queryFn: fetchData,
        enabled: !!email,
    });
    const { data: myQuestions, isLoading: isLoadingMyQuestions } = useQuery({
        queryKey: [`questions${technology}`],
        queryFn: fetchMyQuestions,
        enabled: !!email,
    });
    useEffect(() => {
        fetchMyQuestions();
    }, [technology]);
    return { user, isLoading, error, myQuestions, isLoadingMyQuestions };
};

export default useUser;
