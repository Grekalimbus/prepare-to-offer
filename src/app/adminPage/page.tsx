"use client";
import { Company } from "@/types/company/company";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useGetCompanyPending from "../hooks/useGetCompanyPending";
import useUser from "../hooks/useUser";
import CompaniesCards from "../modules/companiesCards/CompaniesCards";
import CompanyCreate from "../modules/companyForm/companyCreate/CompanyCreate";
import QuestionCreate from "../modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "../modules/questionsCards/QuestionsCards";
import styles from "./Admin.module.css";
import CategoryActionNav from "./components/CategoryActionNav";
import SelectCategoryButtons from "./components/SelectCategoryButtons";

interface Props {
    navButton: string;
    category: string;
    companies?: {
        companiesPending: Company[] | undefined;
        isLoading: boolean;
        error: Error | null;
    };
    isAdmin: boolean;
}
const DynamicComponent = ({ navButton, category, companies, isAdmin }: Props) => {
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
        return <QuestionsCards status="PENDING" />;
    }
};

const AdminPage = () => {
    const companies = useGetCompanyPending();
    const [isActiveNavButton, setIsActiveNavButton] = useState<string>("Добавить");
    const [isActiveCategory, setIsActiveCategory] = useState<string>("Технические вопросы");
    const session = useSession();
    const email = session.data?.user?.email;
    const user = useUser({ email });
    const isAdmin = user.user?.roles[0] === "ADMIN" ? true : false;
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

    return !isAdmin ? (
        <div>Доступно только администраторам</div>
    ) : (
        <div className={styles.wrapper}>
            <SelectCategoryButtons isActive={isActiveCategory} setIsActive={handleChangeCategory} />
            <section className={styles.flexContainer}>
                <CategoryActionNav isActive={isActiveNavButton} setIsActive={setIsActiveNavButton} />
                <DynamicComponent
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
