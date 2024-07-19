"use client";
import { NavButton } from "@/frontend/types/navButton/navButton";
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
    value: string;
    arrayButtons: NavButton[];
    setValue: (value: string) => void;
}

export const useTechnologyNav = create<TechnologyNav>(set => ({
    value: "react",
    arrayButtons: [
        { value: "react", text: "React" },
        { value: "javascript", text: "JavaScript" },
        { value: "typescript", text: "TypeScript" },
        { value: "html", text: "HTML" },
        { value: "css", text: "CSS" },
        { value: "nextjs", text: "Next.js" },
        { value: "architecture", text: "Архитектура" },
        { value: "redux", text: "Redux" },
        { value: "common", text: "Общие" },
    ],
    setValue: (value: string) => set({ value: value }),
}));

// ==========
interface AdminActions {
    value: string;
    arrayButtons: NavButton[];
    setValue: (value: string) => void;
}

export const useAdminActions = create<AdminActions>(set => ({
    value: "add",
    arrayButtons: [
        { text: "Добавить", value: "add" },
        { text: "Изменить", value: "change" },
        { text: "Удалить", value: "delete" },
        { text: "Входящие заявки", value: "incoming" },
    ],
    setValue: (value: string) => set({ value: value }),
}));

// ==========
interface QuestionSection {
    value: string;
    sectionButtons: NavButton[];
    setValue: (value: string) => void;
}

export const useQuestionSection = create<QuestionSection>(set => ({
    value: "allQuestions",
    sectionButtons: [
        { text: "Вопросы для всех", value: "allQuestions" },
        { text: "Мои вопросы", value: "myQuestions" },
        { text: "Избранные", value: "favoriteQuestions" },
        { text: "Добавить новый вопрос", value: "addQuestion" },
    ],
    setValue: (value: string) => set({ value: value }),
}));

// ==========
interface CompanySection {
    value: string;
    sectionButtons: NavButton[];
    setValue: (value: string) => void;
}

export const useCompanySection = create<CompanySection>(set => ({
    value: "allCompany",
    sectionButtons: [
        { text: "Мои список", value: "myCompany" },
        { text: "Общий список", value: "allCompany" },
        { text: "Добавить", value: "addCompany" },
    ],
    setValue: (value: string) => set({ value: value }),
}));

// ==========
interface AdminSection {
    value: string;
    sectionButtons: NavButton[];
    setValue: (value: string) => void;
}

export const useAdminSection = create<AdminSection>(set => ({
    value: "techQuestions",
    sectionButtons: [
        { text: "Компании", value: "companies" },
        { text: "Технические вопросы", value: "techQuestions" },
        { text: "Вопросы от кандидата", value: "questionsCandidate" },
    ],
    setValue: (value: string) => set({ value: value }),
}));

// ==========
interface FilterQuestions {
    filterValue: string;
    setFilterValue: (value: string) => void;
}

export const useFilterQuestions = create<FilterQuestions>(set => ({
    filterValue: "",
    setFilterValue: (value: string) => set({ filterValue: value }),
}));

// ==========
interface FilterCompany {
    filterValue: string;
    setFilterValue: (value: string) => void;
}

export const useFilterCompany = create<FilterCompany>(set => ({
    filterValue: "",
    setFilterValue: (value: string) => set({ filterValue: value }),
}));
