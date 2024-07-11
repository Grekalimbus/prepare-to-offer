import { useContext, useEffect } from "react";
import { CustomNavBarContext } from "./CustomNavBarContext";

interface NavButton {
    text: string;
    value: string;
}

interface Props {
    currentSection: { section: string; value: string };
}

const useCustomNavBarHook = ({ currentSection }: Props) => {
    const { activeSection, setActiveSection } = useContext(CustomNavBarContext);

    useEffect(() => {
        const savedSection = localStorage.getItem(currentSection.section);

        if (!savedSection) {
            localStorage.setItem(currentSection.section, currentSection.value);
            setActiveSection({ section: currentSection.section, value: currentSection.value });
        }
        if (savedSection) {
            setActiveSection({ section: currentSection.section, value: savedSection });
        }
    }, []);

    const handleChangeSection = (navButton: NavButton) => {
        localStorage.setItem(currentSection.section, navButton.value);
        setActiveSection({ section: currentSection.section, value: navButton.value });
    };

    return { activeSection, handleChangeSection };
};

export default useCustomNavBarHook;
