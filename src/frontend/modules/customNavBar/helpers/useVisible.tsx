import { usePathname } from "next/navigation";

const useVisible = () => {
    const path = usePathname();

    const isVisible =
        (path.includes("/questionsPage") &&
            !["/questionsPage/addQuestion", "/questionsPage/favoriteQuestions"].includes(path)) ||
        path.includes("/adminPage");

    return { isVisible };
};

export default useVisible;
