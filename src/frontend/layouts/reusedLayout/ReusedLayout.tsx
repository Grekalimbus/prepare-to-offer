import CustomNavBar from "@/frontend/modules/customNavBar/CustomNavBar";
import SelectCategoryButtons from "@/frontend/modules/selectSectionButtons/SelectSectionButtons";
import { ReactNode } from "react";
import styles from "./ReusedLayout.module.css";

interface Section {
    value: string;
    section: string;
}
interface NavButton {
    text: string;
    value: string;
}

interface Props {
    children: ReactNode;
    sections: Section[];
    arrayButtons?: NavButton[];
}

const ReusedLayout = ({ children, sections, arrayButtons }: Props) => {
    return (
        <>
            <SelectCategoryButtons sections={sections} />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <div className={styles.flexContainer}>{children}</div>
                    {arrayButtons && <CustomNavBar arrayButtons={arrayButtons} />}
                </div>
            </div>
        </>
    );
};

export default ReusedLayout;
