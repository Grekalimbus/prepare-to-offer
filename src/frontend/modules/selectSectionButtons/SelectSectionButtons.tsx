"use client";
import { NavButton } from "@/frontend/types/navButton/navButton";
import Link from "next/link";
import styles from "./SelectSectionButtons.module.css";
import useGetSection from "./helpers/useGetSection";

const SelectCategoryButtons = () => {
    // Получаем нужную массив секций в зависимости от URL
    const { value, setValue, sectionButtons } = useGetSection();

    return (
        <section className={styles.selectCategoryButtons}>
            {sectionButtons.map((section: NavButton) => {
                return (
                    <Link
                        href={section.value}
                        onClick={() => setValue(section.value)}
                        key={section.value}
                        className={`${styles.categoryButton} ${value === section.value && styles.active}`}
                    >
                        {section.text}
                    </Link>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
