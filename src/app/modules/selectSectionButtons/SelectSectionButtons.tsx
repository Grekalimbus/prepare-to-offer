"use client";
import styles from "./SelectSectionButtons.module.css";
import useSelectCategoryHook from "./useSelectCategoryHook";

interface Section {
    text: string;
    section: string;
}

interface Props {
    sections: Section[];
    currentSection: { section: string; value: string };
}

const SelectCategoryButtons = ({ sections, currentSection }: Props) => {
    const { activeSection, handleChangeSection } = useSelectCategoryHook({ currentSection });

    return (
        <section className={styles.selectCategoryButtons}>
            {sections.map((section: Section) => {
                return (
                    <button
                        onClick={() => handleChangeSection(section)}
                        key={section.section}
                        className={`${styles.categoryButton} ${
                            activeSection.value === section.section && styles.active
                        }`}
                    >
                        {section.text}
                    </button>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
