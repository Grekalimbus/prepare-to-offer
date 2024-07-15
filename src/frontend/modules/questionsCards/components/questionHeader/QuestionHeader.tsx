import useQuestion from "@/frontend/domains/question/useQuestion";
import { QuestionHeaderProps } from "../../types/types";
import FlexButtons from "./FlexButtons";
import QuestionToggle from "./QuestionToggle";

const QuestionHeader = ({ question, index, status, setIsActive, isActive }: QuestionHeaderProps) => {
    const { dataFavoriteQuestions, email, createFavoriteQuestion } = useQuestion();
    const isFavoriteTrue = dataFavoriteQuestions.data?.some(item => item._id === question._id);
    return (
        <QuestionToggle isActive={isActive} setIsActive={setIsActive}>
            <FlexButtons
                status={status}
                index={index}
                question={question}
                isActive={isActive}
                email={email}
                isFavoriteTrue={isFavoriteTrue}
                createFavoriteQuestion={createFavoriteQuestion}
                setIsActive={setIsActive}
            />
        </QuestionToggle>
    );
};

export default QuestionHeader;
