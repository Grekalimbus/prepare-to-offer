"use client";
import { BASE_URL } from "@/configs/baseURL";
import { Company } from "@/types/company/company";
import { Question } from "@/types/question/question";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useGetCompanyPending from "../hooks/useGetCompanyPending";
import useGetPendingQuestions from "../hooks/useGetPendingQuestions";
import CompaniesCards from "../modules/companiesCards/CompaniesCards";
import CompanyCreate from "../modules/companyForm/companyCreate/CompanyCreate";
import QuestionCreate from "../modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "../modules/questionsCards/QuestionsCards";
import styles from "./Admin.module.css";
import CategoryActionNav from "./components/CategoryActionNav";
import SelectCategoryButtons from "./components/SelectCategoryButtons";

interface User {
    email: string;
    roles: string[];
}
interface Props {
    navButton: string;
    category: string;
    questions?: {
        questions: Question[] | undefined;
        isLoading: boolean;
        error: Error | null;
    };
    companies?: {
        companiesPending: Company[] | undefined;
        isLoading: boolean;
        error: Error | null;
    };
    isAdmin: boolean;
}
const DynamicComponent = ({ navButton, category, companies, isAdmin, questions }: Props) => {
    if (navButton === "Добавить" && category === "Технические вопросы") {
        return <QuestionCreate />;
    }
    if (navButton === "Добавить" && category === "Компании") {
        return <CompanyCreate />;
    }
    if (navButton === "Входящие заявки" && category === "Компании") {
        if (companies) {
            return <CompaniesCards status="PENDING" companies={companies} isAdmin={isAdmin} />;
        }
    }
    if (navButton === "Входящие заявки" && category === "Технические вопросы") {
        if (questions) {
            return <QuestionsCards status="PENDING" questions={questions} isAdmin={isAdmin} />;
        }
    }
};

const AdminPage = () => {
    const companies = useGetCompanyPending();
    const questions = useGetPendingQuestions();
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isActiveNavButton, setIsActiveNavButton] = useState<string>("Добавить");
    const [isActiveCategory, setIsActiveCategory] = useState<string>("Технические вопросы");
    const session = useSession();
    const handleChangeCategory = (text: string) => {
        setIsActiveCategory(text);
        localStorage.setItem("categoryButton", text);
    };
    useEffect(() => {
        const categoryButton = localStorage.getItem("categoryButton");
        if (!categoryButton) {
            localStorage.setItem("categoryButton", isActiveCategory);
        }
        if (categoryButton) setIsActiveCategory(categoryButton);
    }, []);
    useEffect(() => {
        if (session.data) {
            const email = session.data.user?.email;
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
    }, [session]);

    return !isAdmin ? (
        <div>Доступно только администраторам</div>
    ) : (
        <div className={styles.wrapper}>
            <SelectCategoryButtons isActive={isActiveCategory} setIsActive={handleChangeCategory} />
            <section className={styles.flexContainer}>
                <CategoryActionNav isActive={isActiveNavButton} setIsActive={setIsActiveNavButton} />
                <DynamicComponent
                    questions={questions}
                    navButton={isActiveNavButton}
                    category={isActiveCategory}
                    companies={companies}
                    isAdmin={isAdmin}
                />
            </section>
        </div>
    );
};

export default AdminPage;
