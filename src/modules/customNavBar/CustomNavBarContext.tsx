"use client";
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";
interface Section {
    section: string;
    value: string;
}
interface CustomNavBarContextProps {
    activeSection: Section;
    setActiveSection: Dispatch<SetStateAction<Section>>;
}

// Создание контекста с начальными значениями по умолчанию
export const CustomNavBarContext = createContext<CustomNavBarContextProps>({
    activeSection: { section: "", value: "" },
    setActiveSection: () => {},
});

// Определяем интерфейс для свойств провайдера
interface CustomNavBarProviderProps {
    children: ReactNode;
}

// Провайдер контекста
export const CustomNavBarProvider: FC<CustomNavBarProviderProps> = ({ children }) => {
    const [activeSection, setActiveSection] = useState<Section>({ section: "", value: "" });

    return (
        <CustomNavBarContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </CustomNavBarContext.Provider>
    );
};
