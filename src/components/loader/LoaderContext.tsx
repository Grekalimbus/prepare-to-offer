"use client";
import React, { ReactNode, createContext, useState } from "react";

// Определяем интерфейс для значений контекста
interface LoaderContextProps {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Создание контекста с начальными значениями по умолчанию
export const LoaderContext = createContext<LoaderContextProps>({
    isLoading: false,
    setIsLoading: () => {},
});

// Определяем интерфейс для свойств провайдера
interface LoaderProviderProps {
    children: ReactNode;
}

// Провайдер контекста
export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoaderContext.Provider>;
};
