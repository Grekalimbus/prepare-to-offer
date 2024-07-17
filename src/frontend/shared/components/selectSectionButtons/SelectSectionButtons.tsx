"use client";

import { Section } from "@/frontend/types/section/section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SelectSectionButtons.module.css";

interface Props {
    sections: Section[];
}

const SelectCategoryButtons = ({ sections }: Props) => {
    const path = usePathname().split("/");

    // currentSection - значение эндпоинта для проверки активной кнопки
    const currentSection = path[path.length - 1];
    return (
        <section className={styles.selectCategoryButtons}>
            {sections.map((section: Section) => {
                return (
                    <Link
                        href={section.section}
                        key={section.section}
                        className={`${styles.categoryButton} ${currentSection === section.section && styles.active}`}
                    >
                        {section.value}
                    </Link>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
