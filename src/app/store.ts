"use client";
import { create } from "zustand";

interface NavBarState {
    isNavBar: boolean;
    setIsNavBar: (value?: boolean) => void;
}

export const useNavBar = create<NavBarState>(set => ({
    isNavBar: false,
    setIsNavBar: (value?: boolean) =>
        set(state => ({
            isNavBar: value !== undefined ? value : !state.isNavBar,
        })),
}));

// ==========
interface AuthModal {
    isAuthModal: boolean;
    setIsAuthModal: () => void;
}

export const useAuthModal = create<AuthModal>(set => ({
    isAuthModal: false,
    setIsAuthModal: () => set(state => ({ isAuthModal: !state.isAuthModal })),
}));

// ==========
interface PolicyModal {
    isPolicy: boolean;
    setIsPolicy: () => void;
}

export const usePolicyModal = create<PolicyModal>(set => ({
    isPolicy: false,
    setIsPolicy: () => set(state => ({ isPolicy: !state.isPolicy })),
}));

// ==========
interface Loader {
    isLoader: boolean;
    setIsLoader: () => void;
}

export const useLoader = create<Loader>(set => ({
    isLoader: false,
    setIsLoader: () => set(state => ({ isLoader: !state.isLoader })),
}));

// ==========
interface TechnologyNav {
    technology: string;
    setTechnology: (value: string) => void;
}

export const useTechnologyNav = create<TechnologyNav>(set => ({
    technology: "react",
    setTechnology: (value: string) => set({ technology: value }),
}));

// ==========
interface ActionNav {
    action: string;
    setAction: (value: string) => void;
}

export const useActionNav = create<ActionNav>(set => ({
    action: "add",
    setAction: (value: string) => set({ action: value }),
}));

// ==========
interface FilterQuestions {
    filterValue: string;
    setFilterValue: (value: string) => void;
}

const useFilterQuestions = create<FilterQuestions>(set => ({
    filterValue: "",
    setFilterValue: (value: string) => set({ filterValue: value }),
}));

export default useFilterQuestions;
