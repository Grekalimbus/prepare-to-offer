"use client";
import { Company } from "@/types/company/company";
import { useSession } from "next-auth/react";
import useUser from "../hooks/useUser";
import CompaniesCards from "../modules/companiesCards/CompaniesCards";
import CompanyCreate from "../modules/companyForm/companyCreate/CompanyCreate";
import QuestionCreate from "../modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "../modules/questionsCards/QuestionsCards";

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
    const session = useSession();
    const email = session.data?.user?.email;
    const user = useUser({ email });
    return null;
};

export default AdminPage;
// return !isAdmin ? (
//     <div>Доступно только администраторам</div>
// ) : (
//     <div className={styles.wrapper}>
//         <SelectCategoryButtons isActive={isActiveCategory} setIsActive={handleChangeCategory} />
//         <section className={styles.flexContainer}>
//             <CategoryActionNav />
//             <DynamicComponent
//                 navButton={isActiveNavButton}
//                 category={isActiveCategory}
//                 companies={companies}
//                 isAdmin={isAdmin}
//             />
//         </section>
//     </div>
// );
