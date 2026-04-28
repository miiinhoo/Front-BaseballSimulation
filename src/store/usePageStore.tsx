import { create } from "zustand";

interface Player {
    title: number;    
    nextTitle:() => void;
    prevTitle:() => void;
}

export const usePlayerStore = create<Player>((set) => ({
    title: 1,
    nextTitle: () => set((state) => {
        if(state.title < 4) {
            return { title : state.title + 1 }
        }
        return state;
    }),
    prevTitle: () => set((state) => {
        if(state.title > 1) {
            return { title : state.title - 1 }
        }
        return state;
    }) 
}))