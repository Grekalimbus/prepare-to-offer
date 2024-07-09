import CategoryActionNav from "@/app/adminPage/components/CategoryActionNav";
import SelectCategoryButtons from "@/app/adminPage/components/SelectCategoryButtons";
import CompaniesCards from "@/app/modules/companiesCards/CompaniesCards";
import CompanyCreate from "@/app/modules/companyForm/companyCreate/CompanyCreate";
import QuestionCreate from "@/app/modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "@/app/modules/questionsCards/QuestionsCards";
import styles from "../../../../Admin.module.css";
interface Params {
    params: { section: string; navAction: string };
}
const DynamicComponent = ({ params }: Params) => {
    const { section, navAction } = params;
    if (navAction === "add") {
        if (section === "techQuestions") return <QuestionCreate />;
        if (section === "companies") return <CompanyCreate />;
    }
    if (navAction === "incoming") {
        if (section === "techQuestions") return <QuestionsCards status="PENDING" />;
        if (section === "companies") return <CompaniesCards status="PENDING" />;
    }
};
const page = ({ params }: Params) => {
    console.log("params", params);
    return (
        <>
            <SelectCategoryButtons params={params} />
            <div className={styles.wrapper}>
                <CategoryActionNav params={params} />
                <DynamicComponent params={params} />
            </div>
        </>
    );
};

export default page;
