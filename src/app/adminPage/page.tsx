import CompaniesCards from "@/app/modules/companiesCards/CompaniesCards";
import CompanyCreate from "@/app/modules/companyForm/companyCreate/CompanyCreate";
import QuestionCreate from "@/app/modules/questionForm/questionCreate/QuestionCreate";
import QuestionsCards from "@/app/modules/questionsCards/QuestionsCards";
import SelectCategoryButtons from "@/app/modules/selectSectionButtons/SelectSectionButtons";
import CustomNavBar from "../modules/customNavBar/CustomNavBar";
import styles from "./Admin.module.css";
interface Params {
    params: { section: string; navAction: string };
}
interface NavButton {
    text: string;
    value: string;
}
interface Section {
    text: string;
    section: string;
}
const actions: NavButton[] = [
    { text: "Добавить", value: "add" },
    { text: "Изменить", value: "change" },
    { text: "Удалить", value: "delete" },
    { text: "Входящие заявки", value: "incoming" },
];
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
                currentSection={{ section: "adminSection", value: "techQuestions" }}
                sections={sections}
            />
            <div className={styles.wrapper}>
                <CustomNavBar arrayButtons={actions} currentSection={{ section: "navActions", value: "add" }} />
                <DynamicComponent params={params} />
            </div>
        </>
    );
};

export default page;
