import { ModalAuthContext } from "@/app/components/modalWindow/ModalAuth/ModalAuthContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { SelectSectionContext } from "./SelectSectionContext";

interface Section {
    text: string;
    section: string;
}

interface Props {
    currentSection: { section: string; value: string };
}

const useSelectCategoryHook = ({ currentSection }: Props) => {
    const session = useSession();
    const router = useRouter();
    const { setIsModalActive } = useContext(ModalAuthContext);
    const { activeSection, setActiveSection } = useContext(SelectSectionContext);

    useEffect(() => {
        const savedSection = localStorage.getItem(currentSection.section);
        if (!savedSection) {
            localStorage.setItem(currentSection.section, currentSection.value);
            setActiveSection({ section: currentSection.section, value: currentSection.value });
        }
        if (savedSection) {
            if (session.data === null) {
                localStorage.setItem(currentSection.section, currentSection.value);
                setActiveSection({ section: currentSection.section, value: currentSection.value });
            }
            if (session.data) {
                setActiveSection({ section: currentSection.section, value: savedSection });
            }
        }
    }, [session]);

    const handleChangeSection = (section: Section) => {
        if (currentSection.section === "questions") {
            if (!session.data && section.section !== "forAllQuestions") {
                setIsModalActive(prev => !prev);
            }
            if (session.data) {
                localStorage.setItem(currentSection.section, section.section);
                setActiveSection({ section: currentSection.section, value: section.section });
                router.push(`questionsPage/${section.section}`);
            }
        }
        if (currentSection.section === "adminSection") {
            localStorage.setItem(currentSection.section, section.section);
            setActiveSection({ section: currentSection.section, value: section.section });
        }
    };

    return { activeSection, handleChangeSection };
};

export default useSelectCategoryHook;
