"use client";
import React, { ReactNode, createContext, useState } from "react";

// Определяем интерфейс для значений контекста
interface NavigationContextProps {
    isNavigationActive: boolean;
    setIsNavigationActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// Создание контекста с начальными значениями по умолчанию
export const NavigationContext = createContext<NavigationContextProps>({
    isNavigationActive: false,
    setIsNavigationActive: () => {},
});

// Определяем интерфейс для свойств провайдера
interface NavigationProviderProps {
    children: ReactNode;
}

// Провайдер контекста
export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
    const [isNavigationActive, setIsNavigationActive] = useState(false);

    return (
        <NavigationContext.Provider value={{ isNavigationActive, setIsNavigationActive }}>
            {children}
        </NavigationContext.Provider>
    );
};
