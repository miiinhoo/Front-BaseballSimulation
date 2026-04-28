import { create } from "zustand";

interface UiState {
    scene : "TITLE" | "LOBBY" | "RELATION" | "TRAINING";
    setScene : (next : UiState["scene"]) => void;
}

export const useUiStore = create<UiState> ((set) => ({
    scene : "TITLE",
    setScene : (next) => set({ scene : next })
}))