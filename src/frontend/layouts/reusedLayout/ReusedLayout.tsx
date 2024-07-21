import CustomNavBar from "@/frontend/modules/customNavBar/CustomNavBar";
import SelectCategoryButtons from "@/frontend/modules/selectSectionButtons/SelectSectionButtons";
import { ReactNode } from "react";
import styles from "./ReusedLayout.module.css";

const ReusedLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.flexContainer}>
            <SelectCategoryButtons />
            <div className={styles.wrapper}>
                <CustomNavBar />
                {children}
            </div>
        </div>
    );
};

export default ReusedLayout;
