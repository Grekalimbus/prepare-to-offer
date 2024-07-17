import CustomNavBar from "@/frontend/modules/customNavBar/CustomNavBar";
import SelectCategoryButtons from "@/frontend/shared/components/selectSectionButtons/SelectSectionButtons";
import { NavButton } from "@/frontend/types/navButton/navButton";
import { Section } from "@/frontend/types/section/section";
import { ReactNode } from "react";
import styles from "./ReusedLayout.module.css";

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
