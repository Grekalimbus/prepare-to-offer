import WrapperCardContent from "@/frontend/shared/wrapperCardContent/WrapperCardContent";
import FilterForm from "./components/FilterForm";
import QuestionList from "./components/QuestionList";

const QuestionsCards = ({ status }: { status?: string }) => {
    return (
        <>
            <FilterForm />
            <WrapperCardContent status={status}>
                <QuestionList status={status} />
            </WrapperCardContent>
        </>
    );
};
export default QuestionsCards;
