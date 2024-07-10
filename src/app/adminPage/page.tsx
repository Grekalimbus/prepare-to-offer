import CompaniesCards from "@/app/modules/companiesCards/CompaniesCards";
import CompanyCreate from "@/app/modules/companyForm/companyCreate/CompanyCreate";
import QuestionCreate from "@/app/modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "@/app/modules/questionsCards/QuestionsCards";
import SelectCategoryButtons from "@/app/modules/selectSectionButtons/SelectSectionButtons";
import styles from "./Admin.module.css";
import CategoryActionNav from "./components/CategoryActionNav";
interface Params {
    params: { section: string; navAction: string };
}

interface Section {
    text: string;
    section: string;
}

const sections: Section[] = [
    { text: "Компании", section: "companies" },
    { text: "Технические вопросы", section: "techQuestions" },
    { text: "Вопросы от кандидата", section: "questionsCandidate" },
];

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
    return (
        <>
            <SelectCategoryButtons
                currentSection={{ section: "adminSection", text: "Технические вопросы" }}
                sections={sections}
            />
            <div className={styles.wrapper}>
                <CategoryActionNav params={params} />
                <DynamicComponent params={params} />
            </div>
        </>
    );
};

export default page;
