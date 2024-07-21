import { usePathname } from "next/navigation";
import { useState } from "react";

const useVisible = () => {
    let isVisible = false;
    const [isNavHide, setIsNavHide] = useState<boolean>(true);
    const path = usePathname();

    switch (true) {
        case path.includes("/questionsPage") &&
            !["/questionsPage/addQuestion", "/questionsPage/favoriteQuestions"].includes(path): {
            isVisible = true;
            break;
        }
        case path.includes("/adminPage"): {
            isVisible = true;
        }
    }

    return { isVisible, isNavHide, setIsNavHide };
};

export default useVisible;
