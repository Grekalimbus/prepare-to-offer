import CompaniesCards from "@/frontend/modules/companiesCards/CompaniesCards";
import CompanyCreate from "@/frontend/modules/companyForm/companyCreate/CompanyCreate";
import CustomNavBar from "@/frontend/modules/customNavBar/CustomNavBar";
import QuestionCreate from "@/frontend/modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "@/frontend/modules/questionsCards/QuestionsCards";
import SelectCategoryButtons from "@/frontend/shared/components/selectSectionButtons/SelectSectionButtons";
import { NavButton } from "@/frontend/types/navButton/navButton";
import { Section } from "@/frontend/types/section/section";
import styles from "./Admin.module.css";

interface Params {
    params: { section: string; navAction: string };
}

const actions: NavButton[] = [
    { text: "Добавить", value: "add" },
    { text: "Изменить", value: "change" },
    { text: "Удалить", value: "delete" },
    { text: "Входящие заявки", value: "incoming" },
];
const sections: Section[] = [
    { value: "Компании", section: "companies" },
    { value: "Технические вопросы", section: "techQuestions" },
    { value: "Вопросы от кандидата", section: "questionsCandidate" },
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
            <SelectCategoryButtons sections={sections} />
            <div className={styles.wrapper}>
                <CustomNavBar arrayButtons={actions} />
                <DynamicComponent params={params} />
            </div>
        </>
    );
};

export default page;
