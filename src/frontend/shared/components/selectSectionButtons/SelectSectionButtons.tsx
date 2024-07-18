"use client";
import { useAdminSection, useCompanySection, useQuestionSection } from "@/app/store";
import { NavButton } from "@/frontend/types/navButton/navButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SelectSectionButtons.module.css";

interface FuncParams {
    value: string;
    setValue: (value: string) => void;
    sectionButtons: NavButton[];
}
// функция для получения необходимого массива в зависимости от URL
const getValueAndSection = (path: string): FuncParams => {
    if (path.includes("/adminPage")) {
        const { value, sectionButtons, setValue } = useAdminSection();
        return { value, setValue, sectionButtons };
    }
    if (path.includes("/company")) {
        const { value, sectionButtons, setValue } = useCompanySection();
        return { value, setValue, sectionButtons };
    }
    const { value, sectionButtons, setValue } = useQuestionSection();
    return { value, setValue, sectionButtons };
};

const SelectCategoryButtons = () => {
    const path = usePathname();
    const { value, setValue, sectionButtons } = getValueAndSection(path);

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
