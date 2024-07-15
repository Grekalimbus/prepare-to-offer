import { useState } from "react";
import { QuestionContentProps } from "../../types/types";
import QuestionHeader from "../questionHeader/QuestionHeader";
import FirstPartContent from "./FirstPartContent";
import SecondPartContent from "./SecondPartContent";

const QuestionContent = ({ question, index, status }: QuestionContentProps) => {
    const [isActive, setIsActive] = useState<boolean>(!index ? true : false);

    return (
        <>
            <QuestionHeader
                isActive={isActive}
                setIsActive={setIsActive}
                question={question}
                index={index}
                status={status}
            />
            <FirstPartContent isActive={isActive} question={question} />
            <SecondPartContent isActive={isActive} question={question} />
        </>
    );
};

export default QuestionContent;
