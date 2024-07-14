"use client";
import { create } from "zustand";

interface NavBarState {
    navBarState: boolean;
    setNavBarState: (value?: boolean) => void;
}

export const useNavBar = create<NavBarState>(set => ({
    navBarState: false,
    setNavBarState: (value?: boolean) =>
        set(state => ({
            navBarState: value !== undefined ? value : !state.navBarState,
        })),
}));

// ==========
interface AuthModal {
    authModal: boolean;
    setAuthModal: () => void;
}

export const useAuthModal = create<AuthModal>(set => ({
    authModal: false,
    setAuthModal: () => set(state => ({ authModal: !state.authModal })),
}));

// ==========
interface PolicyModal {
    policyModal: boolean;
    setPolicyModal: () => void;
}

export const usePolicyModal = create<PolicyModal>(set => ({
    policyModal: false,
    setPolicyModal: () => set(state => ({ policyModal: !state.policyModal })),
}));
