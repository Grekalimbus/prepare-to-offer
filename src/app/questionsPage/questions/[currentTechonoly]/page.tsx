import QuestionsCards from "@/app/modules/questionsCards/QuestionsCards";
import QuestionsNavBar from "../../components/QuestionsNavBar";
import SelectActionQuestion from "../../components/SelectActionQuestion";
import styles from "../../QuestionsPage.module.css";

interface Props {
    params: { currentTechonoly: string };
}

const page = ({ params }: Props) => {
    console.log("params", params);
    return (
        <>
            <SelectActionQuestion />

            <div className={styles.wrapper}>
                <div className={styles.questionsContainer}>
                    <QuestionsCards status="ACCEPT" />
                    <QuestionsNavBar params={params} />
                </div>
            </div>
        </>
    );
};

export default page;
