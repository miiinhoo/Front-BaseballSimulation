import { create } from "zustand";

export type PitcherRole = "SP" | "RP" | "CP"; // 선발, 중계, 마무리
export type BatterPos = "C" | "1B" | "2B" | "3B" | "SS" | "LF" | "CF" | "RF" | "DH";

interface User {
    name: string;
    height: number;
    weight: number;
    school: string;
    pos: "투수" | "타자";
    detailPos: PitcherRole | BatterPos | "";
    trait: string;

    setName: (name: string) => void;
    setHeight: (val: number | ((prev: number) => number)) => void;
    setWeight: (val: number | ((prev: number) => number)) => void;
    setSchool: (school: string) => void;
    setMainPos: (pos: "투수" | "타자") => void;
    setDetailPos: (pos: PitcherRole | BatterPos) => void;
}

export const useUserStore = create<User>((set) => ({
    name: "",
    height:0,
    weight:0,
    school: "",
    pos: "투수",
    detailPos: "",
    trait: "",

    setName: (name) => set({ name }),
    setHeight: (val) => set((state) => ({ 
        height: typeof val === 'function' ? val(state.height) : val 
    })),
    setWeight: (val) => set((state) => ({ 
        weight: typeof val === 'function' ? val(state.weight) : val 
    })),
    setSchool: (school) => set({ school }),
    setMainPos: (pos) => set({ pos, detailPos: "" }), 
    setDetailPos: (detailPos) => set({ detailPos }),
 
}))