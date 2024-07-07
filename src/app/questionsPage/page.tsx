import styles from "./QuestionsPage.module.css";

import QuestionsNavBar from "./components/QuestionsNavBar";
import SelectActionQuestion from "./components/SelectActionQuestion";

const QuestionsPage = () => {
    return (
        <>
            <SelectActionQuestion />
            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <QuestionsNavBar />
                </div>
            </div>
        </>
    );
};

export default QuestionsPage;
