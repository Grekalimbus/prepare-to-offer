import ReusedLayout from "@/frontend/layouts/reusedLayout/ReusedLayout";
import { Section } from "@/frontend/types/section/section";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const sections: Section[] = [
    { value: "Мои список", section: "myCompany" },
    { value: "Общий список", section: "allCompany" },
    { value: "Добавить", section: "addCompany" },
];

const MainLayout: React.FC<Props> = ({ children }) => {
    return <ReusedLayout sections={sections}>{children}</ReusedLayout>;
};

export default MainLayout;
