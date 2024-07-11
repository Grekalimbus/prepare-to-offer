"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./SelectSectionButtons.module.css";

interface Section {
    text: string;
    section: string;
}

interface Props {
    sections: Section[];
}

const SelectCategoryButtons = ({ sections }: Props) => {
    const router = useRouter();
    const path = usePathname().split("/");
    const currentSection = path[path.length - 1];
    console.log("path", path);
    return (
        <section className={styles.selectCategoryButtons}>
            {sections.map((section: Section) => {
                return (
                    <button
                        onClick={() => router.push(`${section.section}`)}
                        key={section.section}
                        className={`${styles.categoryButton} ${currentSection === section.section && styles.active}`}
                    >
                        {section.text}
                    </button>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
