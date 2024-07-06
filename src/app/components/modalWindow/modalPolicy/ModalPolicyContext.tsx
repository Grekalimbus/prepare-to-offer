"use client";
import React, { ReactNode, createContext, useState } from "react";

// Определяем интерфейс для значений контекста
interface ModalPolicyContextProps {
    isModalActive: boolean;
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// Создание контекста с начальными значениями по умолчанию
export const ModalPolicyContext = createContext<ModalPolicyContextProps>({
    isModalActive: false,
    setIsModalActive: () => {},
});

// Определяем интерфейс для свойств провайдера
interface ModalPolicyProviderProps {
    children: ReactNode;
}

// Провайдер контекста
export const ModalPolicyProvider: React.FC<ModalPolicyProviderProps> = ({ children }) => {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <ModalPolicyContext.Provider value={{ isModalActive, setIsModalActive }}>
            {children}
        </ModalPolicyContext.Provider>
    );
};
