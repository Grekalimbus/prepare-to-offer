"use client";
import ButtonInCustomNav from "@/frontend/ui/Buttons/buttonInCustomNav/ButtonInCustomNav";
import Hide from "@/frontend/ui/Buttons/hide/Hide";
import { PiSlideshowFill } from "react-icons/pi";
import styles from "./CustomNavBar.module.css";
import useGetNavValues from "./helpers/useGetNavValues";
import useVisible from "./helpers/useVisible";

const CustomNavBar = () => {
    // useGetNavValues - Получаем массив для кнопок в зависимости от URL
    // isVisible - в зависимости от url и эндпоинтов возвращаем true/false
    const { value, setValue, arrayButtons } = useGetNavValues();
    const { isVisible } = useVisible();

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
