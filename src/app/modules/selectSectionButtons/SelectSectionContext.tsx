"use client";
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";
interface Section {
    section: string;
    value: string;
}
// Определяем интерфейс для значений контекста
interface Section {
    section: string;
    value: string;
}

interface SelectSectionContextProps {
    activeSection: Section;
    setActiveSection: Dispatch<SetStateAction<Section>>;
}

// Создание контекста с начальными значениями по умолчанию
export const SelectSectionContext = createContext<SelectSectionContextProps>({
    activeSection: { section: "", value: "" },
    setActiveSection: () => {},
});

// Определяем интерфейс для свойств провайдера
interface SelectSectionProviderProps {
    children: ReactNode;
}

// Провайдер контекста
export const SelectSectionProvider: FC<SelectSectionProviderProps> = ({ children }) => {
    const [activeSection, setActiveSection] = useState<Section>({ section: "", value: "" });

    return (
        <SelectSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SelectSectionContext.Provider>
    );
};
