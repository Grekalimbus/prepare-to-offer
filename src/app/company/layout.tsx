import ReusedLayout from "@/layouts/reusedLayout/ReusedLayout";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

interface Section {
    value: string;
    section: string;
}

const sections: Section[] = [
    { value: "Мои список", section: "myCompany" },
    { value: "Общий список", section: "allCompany" },
    { value: "Добавить", section: "addCompany" },
];

const MainLayout: React.FC<Props> = ({ children }) => {
    return <ReusedLayout sections={sections}>{children}</ReusedLayout>;
};

export default MainLayout;
