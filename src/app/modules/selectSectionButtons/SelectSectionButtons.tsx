"use client";
import { ModalAuthContext } from "@/app/components/modalWindow/ModalAuth/ModalAuthContext";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import styles from "./SelectSectionButtons.module.css";
import { SelectSectionContext } from "./SelectSectionContext";

interface Section {
    text: string;
    section: string;
}

interface Props {
    sections: Section[];
    currentSection: { section: string; text: string };
}

const SelectCategoryButtons = ({ sections, currentSection }: Props) => {
    const session = useSession();
    const { setIsModalActive } = useContext(ModalAuthContext);
    const { activeSection, setActiveSection } = useContext(SelectSectionContext);

    useEffect(() => {
        const savedSection = localStorage.getItem(currentSection.section);
        if (!savedSection) {
            localStorage.setItem(currentSection.section, currentSection.text);
            setActiveSection({ section: currentSection.section, text: currentSection.text });
        }
        if (savedSection && !session.data) {
            localStorage.setItem(currentSection.section, currentSection.text);
            setActiveSection({ section: currentSection.section, text: currentSection.text });
        }
        if (savedSection && session.data) {
            setActiveSection({ section: currentSection.section, text: savedSection });
        }
    }, []);

    const handleChangeSection = (section: Section) => {
        const { text } = section;
        if (currentSection.section === "questions") {
            if (!session.data && section.section !== "forAllQuestions") {
                setIsModalActive(prev => !prev);
                setActiveSection({ section: currentSection.section, text: currentSection.text });
                localStorage.setItem(currentSection.section, currentSection.text);
            }
        }
        if (currentSection.section === "questions" && session.data) {
            localStorage.setItem(currentSection.section, text);
            setActiveSection({ section: currentSection.section, text });
        }
    };
    console.log("activeSection", activeSection);
    return (
        <section className={styles.selectCategoryButtons}>
            {sections.map((section: Section) => {
                return (
                    <button
                        onClick={() => handleChangeSection(section)}
                        key={section.section}
                        className={`${styles.categoryButton} ${activeSection.text === section.text && styles.active}`}
                    >
                        {section.text}
                    </button>
                );
            })}
        </section>
    );
};

export default SelectCategoryButtons;
