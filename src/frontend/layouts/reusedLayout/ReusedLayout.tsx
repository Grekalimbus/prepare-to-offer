import CustomNavBar from "@/frontend/modules/customNavBar/CustomNavBar";
import SelectCategoryButtons from "@/frontend/modules/selectSectionButtons/SelectSectionButtons";
import { ReactNode } from "react";
import styles from "./ReusedLayout.module.css";

const ReusedLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SelectCategoryButtons />
            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <div className={styles.flexContainer}>{children}</div>
                    <CustomNavBar />
                </div>
            </div>
        </>
    );
};

export default ReusedLayout;
