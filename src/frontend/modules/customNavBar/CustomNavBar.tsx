"use client";
import { useAdminActions, useTechnologyNav } from "@/app/store";
import { NavButton } from "@/frontend/types/navButton/navButton";
import ButtonInCustomNav from "@/frontend/ui/Buttons/buttonInCustomNav/ButtonInCustomNav";
import Hide from "@/frontend/ui/Buttons/hide/Hide";
import { usePathname } from "next/navigation";
import { PiSlideshowFill } from "react-icons/pi";
import styles from "./CustomNavBar.module.css";

interface FuncParams {
    value: string;
    setValue: (value: string) => void;
    arrayButtons: NavButton[];
}
// функция для получения необходимого массива в зависимости от URL
const getValueAndAction = (path: string): FuncParams => {
    if (path.includes("/questionsPage")) {
        const { value, arrayButtons, setValue } = useTechnologyNav();
        return { value, setValue, arrayButtons };
    }
    const { value, arrayButtons, setValue } = useAdminActions();
    return { value, setValue, arrayButtons };
};
const CustomNavBar = () => {
    const path = usePathname();
    const isVisible =
        path.includes("/questionsPage") &&
        path !== "/questionsPage/addQuestion" &&
        path !== "/questionsPage/favoriteQuestions";
    const { value, setValue, arrayButtons } = getValueAndAction(path);
    console.log("value", value);
    console.log("arrayButtons", arrayButtons);
    return (
        isVisible && (
            <>
                <aside className={styles.wrapperNavBar}>
                    <div className={styles.navBar}>
                        <section className={styles.containerButtons}>
                            {arrayButtons.map(technology => (
                                <ButtonInCustomNav
                                    key={technology.value}
                                    onClick={() => setValue(technology.value)}
                                    technologyValue={technology.value}
                                    text={technology.text}
                                    value={value}
                                />
                            ))}
                        </section>
                        <Hide text="Скрыть" />
                    </div>
                </aside>
                <PiSlideshowFill className={styles.slideshowButton} />
            </>
        )
    );
};

export default CustomNavBar;
