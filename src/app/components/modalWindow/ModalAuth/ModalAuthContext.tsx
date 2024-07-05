"use client";
import React, { ReactNode, createContext, useState } from "react";

// Определяем интерфейс для значений контекста
interface ModalAuthContextProps {
    isModalActive: boolean;
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// Создание контекста с начальными значениями по умолчанию
export const ModalAuthContext = createContext<ModalAuthContextProps>({
    isModalActive: false,
    setIsModalActive: () => {},
});

// Определяем интерфейс для свойств провайдера
interface ModalAuthProviderProps {
    children: ReactNode;
}

// Провайдер контекста
export const ModalAuthProvider: React.FC<ModalAuthProviderProps> = ({ children }) => {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <ModalAuthContext.Provider value={{ isModalActive, setIsModalActive }}>{children}</ModalAuthContext.Provider>
    );
};
