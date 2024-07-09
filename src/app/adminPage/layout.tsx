import SelectActionQuestion from "../questionsPage/components/SelectActionQuestion";
import styles from "./Admin.module.css";
import CategoryActionNav from "./components/CategoryActionNav";
const AdminPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SelectActionQuestion />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    {children}
                    <CategoryActionNav />
                </div>
            </div>
        </>
    );
};

export default AdminPageLayout;
