import styles from "./QuestionsPage.module.css";
import FilterQuestion from "./components/FilterQuestion";

import QuestionsNavBar from "./components/QuestionsNavBar";
import SelectActionQuestion from "./components/SelectActionQuestion";

const QuestionsPage = () => {
    return (
        <div className={styles.wrapper}>
            <QuestionsNavBar />
            <div className={styles.searchBar}>
                <SelectActionQuestion />
                <FilterQuestion />
            </div>
        </div>
    );
};

export default QuestionsPage;
