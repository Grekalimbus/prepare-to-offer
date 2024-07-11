import { BASE_URL } from "@/configs/baseURL";
import { Question } from "@/types/question/question";
import { IUser } from "@/types/user/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { CustomNavBarContext } from "../modules/customNavBar/CustomNavBarContext";

const useUser = () => {
    const session = useSession();
    const email = session.data?.user?.email;
    const { activeSection } = useContext(CustomNavBarContext);

    const fetchData = async (email: string | null | undefined) => {
        if (email) {
            const { data } = await axios.get<IUser>(`${BASE_URL}/getUser?email=${email}`);
            return data;
        }
        return null;
    };
    const fetchMyQuestions = async (technology: string) => {
        if (email && activeSection.section) {
            const { data } = await axios.get<Question[]>(
                `${BASE_URL}/getUser/queastions?email=${email}&question=${technology}`,
            );
            console.log("data", data);

            return data;
        }
        return;
    };
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: [`getUser${email}`],
        queryFn: () => fetchData(email),
    });
    const { data: myQuestions, isLoading: isLoadingMyQuestions } = useQuery({
        queryKey: [`questions${email}${activeSection.value}`],
        queryFn: () => fetchMyQuestions(activeSection.value),
    });
    useEffect(() => {
        if (activeSection.section) {
            fetchMyQuestions(activeSection.value);
            console.log("myQuestions", myQuestions);
        }
    }, [activeSection]);
    return { user, isLoading, error, myQuestions, isLoadingMyQuestions };
};

export default useUser;
