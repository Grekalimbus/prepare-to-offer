"use client";
import { useFilterQuestions } from "@/app/store";
import FilterForm from "@/frontend/shared/components/filterForm/FilterForm";
import WrapperCardContent from "@/frontend/shared/components/wrapperCardContent/WrapperCardContent";
import QuestionList from "./components/QuestionList";
import styles from "./QuestionsCards.module.css";

const QuestionsCards = ({ status }: { status?: string }) => {
    const { setFilterValue } = useFilterQuestions();
    return (
        <div className={styles.flexContainer}>
            <FilterForm setFilterValue={setFilterValue} />
            <WrapperCardContent status={status}>
                <QuestionList status={status} />
            </WrapperCardContent>
        </div>
    );
};
export default QuestionsCards;
