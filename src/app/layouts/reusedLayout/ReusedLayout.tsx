import { ReactNode } from "react";
import CustomNavBar from "../../modules/customNavBar/CustomNavBar";
import SelectCategoryButtons from "../../modules/selectSectionButtons/SelectSectionButtons";
import styles from "./ReusedLayout.module.css";

interface Section {
    text: string;
    section: string;
}
interface NavButton {
    text: string;
    value: string;
}

interface Props {
    children: ReactNode;
    sections: Section[];
    currentSection: { section: string; value: string };
    arrayButtons: NavButton[];
}

const ReusedLayout = ({ children, sections, arrayButtons, currentSection }: Props) => {
    return (
        <>
            <SelectCategoryButtons sections={sections} />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <div className={styles.flexContainer}>{children}</div>
                    <CustomNavBar arrayButtons={arrayButtons} currentSection={currentSection} />
                </div>
            </div>
        </>
    );
};

export default ReusedLayout;
