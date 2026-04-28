import { create } from "zustand";

interface User {
    name: string;
    school: string;
    pos: string;
    posabout: string,
    trait: string;
}

export const useUserStore = create