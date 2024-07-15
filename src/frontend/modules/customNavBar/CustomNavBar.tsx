"use client";
import { useTechnologyNav } from "@/app/store";
import { NavButton } from "@/frontend/types/navButton/navButton";
import ButtonHide from "@/frontend/ui/Buttons/ButtonHide";
import { usePathname } from "next/navigation";
import { PiSlideshowFill } from "react-icons/pi";
import styles from "./CustomNavBar.module.css";

interface FuncParams {
    value: string;
    action: (value: string) => void;
}
interface Props {
    arrayButtons: NavButton[];
}
const getValueAndAction = (path: string): FuncParams => {
    if (path.includes("/questionsPage")) {
        const { technology, setTechnology } = useTechnologyNav();
        return { value: technology, action: setTechnology };
    }
    const { technology, setTechnology } = useTechnologyNav();
    return { value: technology, action: setTechnology };
};
const CustomNavBar = ({ arrayButtons }: Props) => {
    const path = usePathname();
    const isVisible = path !== "/questionsPage/addQuestion" && path !== "/questionsPage/favoriteQuestions";
    const { value, action } = getValueAndAction(path);

    return (
        isVisible && (
            <>
                <aside className={styles.wrapperNavBar}>
                    <div className={styles.navBar}>
                        <section className={styles.containerButtons}>
                            {arrayButtons.map(technology => (
                                <button
                                    key={technology.value}
                                    onClick={() => action(technology.value)}
                                    className={`${styles.button} ${value === technology.value && styles.active}`}
                                >
                                    {technology.text}
                                </button>
                            ))}
                        </section>
                        <ButtonHide text="Скрыть" />
                    </div>
                </aside>
                <PiSlideshowFill className={styles.slideshowButton} />
            </>
        )
    );
};

export default CustomNavBar;
