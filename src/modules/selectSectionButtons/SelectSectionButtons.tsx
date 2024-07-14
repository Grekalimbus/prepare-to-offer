"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SelectSectionButtons.module.css";

interface Section {
    value: string;
    section: string;
}

interface Props {
    sections: Section[];
}

const SelectCategoryButtons = ({ sections }: Props) => {
    const path = usePathname().split("/");
    const currentSection = path[path.length - 1];
    const width = 100 / sections.length - 0.1;
    return (
        <section className={styles.selectCategoryButtons}>
            {sections.map((section: Section) => {
                return (
                    <Link
                        style={{ width: `${width}%` }}
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
