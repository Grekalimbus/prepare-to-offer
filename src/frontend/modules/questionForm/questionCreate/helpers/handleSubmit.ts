import { Props } from "./types";

const handleSubmit = async ({
    event,
    isAdmin,
    formRef,
    setErrorMessage,
    setIsError,
    setIsSuccess,
    handleCreateQuestion,
    handleCreateUserQuestion,
    handleCreatePendingQuestion,
}: Props) => {
    const formData = new FormData(event.currentTarget);
    const question = formData.get("question") as string;
    const answer = formData.get("answer") as string;
    const sliceOfCode = formData.get("sliceOfCode") as string | "";
    const links = formData.getAll("link") as string[] | [];
    const checkbox = formData.get("checkbox") as string;
    const technology = formData.get("technology") as string;
    const completeData = { question, answer, sliceOfCode, links, technology };
    if (!technology) {
        setErrorMessage("Чтобы отправить форму, выберите технологию из списка");
        setIsError(true);
    }
    if (technology && !checkbox) {
        handleCreateUserQuestion(completeData);
        formRef.current?.reset();
    }
    if (technology && checkbox) {
        handleCreateUserQuestion(completeData);
        if (isAdmin) {
            handleCreateQuestion({ question: completeData, status: "ACCEPT" });
            formRef.current?.reset();
        }
        if (!isAdmin) {
            handleCreatePendingQuestion(completeData);
            handleCreateQuestion({ question: completeData, status: "PENDING" });
            formRef.current?.reset();
        }
        setIsError(false);
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 1500);
    }
};

export default handleSubmit;
