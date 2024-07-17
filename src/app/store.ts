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
interface TechnologyNav {
    technology: string;
    setTechnology: (value: string) => void;
}

export const useTechnologyNav = create<TechnologyNav>(set => ({
    technology: "react",
    setTechnology: (value: string) => set({ technology: value }),
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
