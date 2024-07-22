"use client";
import ButtonInCustomNav from "@/frontend/shared/ui/Buttons/buttonInCustomNav/ButtonInCustomNav";
import Hide from "@/frontend/shared/ui/Buttons/hide/Hide";
import { FaThList } from "react-icons/fa";
import styles from "./CustomNavBar.module.css";
import useGetNavValues from "./helpers/useGetNavValues";
import useVisible from "./helpers/useVisible";

const CustomNavBar = () => {
    // useGetNavValues - Получаем массив для кнопок в зависимости от URL
    // isVisible - в зависимости от url и эндпоинтов возвращаем true/false
    const { value, setValue, arrayButtons } = useGetNavValues();
    const { isVisible, isNavHide, setIsNavHide } = useVisible();

    return (
        isVisible && (
            <>
                {isNavHide && (
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
                            <Hide onClick={() => setIsNavHide(false)} text="Скрыть" />
                        </div>
                    </aside>
                )}
                <FaThList className={styles.slideshowButton} onClick={() => setIsNavHide(true)} />
            </>
        )
    );
};

export default CustomNavBar;
