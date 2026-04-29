import { create } from "zustand";

export type PitcherRole = "SP" | "RP" | "CP"; // 선발, 중계, 마무리
export type BatterPos = "C" | "1B" | "2B" | "3B" | "SS" | "LF" | "CF" | "RF" | "DH";

interface User {
    name: string;
    height: number;
    weight: number;
    school: string;
    pos: "투수" | "타자" | "";
    detailPos: PitcherRole | BatterPos | "";
    throwHand: "RIGHT" | "LEFT";
    batSide: "RIGHT" | "LEFT" | "SWITCH";
    pitchingForm?: "OVER" | "THREE" | "SIDE" | "UNDER"; // 타자일 땐 없을 수 있으니 옵셔널
    playerType: string;

    setName: (name: string) => void;
    setHeight: (val: number | ((prev: number) => number)) => void;
    setWeight: (val: number | ((prev: number) => number)) => void;
    setSchool: (school: string) => void;
    setMainPos: (pos: "투수" | "타자") => void;
    setDetailPos: (pos: PitcherRole | BatterPos) => void;
    setThrowHand: (hand: "RIGHT" | "LEFT") => void;
    setBatSide: (side: "RIGHT" | "LEFT" | "SWITCH") => void;
    setPlayerType: (type: string) => void;
}

export const useUserStore = create<User>((set) => ({
    name: "",
    height:180,
    weight:70,
    school: "",
    pos: "",
    detailPos: "",
    throwHand:"LEFT",
    batSide:"LEFT",
    playerType: "",

    setName: (name) => set({ name }),
    // 키 제한 150 ~ 210
    setHeight: (val) => set((state) => { 
        const nextHeight = typeof val === 'function' ? val(state.height) : val;
        return { 
            height: Math.max(150, Math.min(210, nextHeight)) 
        };
    }),
    // 체중 제한 50 ~ 150
    setWeight: (val) => set((state) => {
        const nextWeight = typeof val === 'function' ? val(state.weight) : val;
        return { 
            weight: Math.max(50, Math.min(150, nextWeight)) 
        };
    }),
    setSchool: (school) => set({ school }),
    setMainPos: (pos) => set({ pos, detailPos: "" }), 
    setDetailPos: (detailPos) => set({ detailPos }),
    setThrowHand: (throwHand) => set({ throwHand }),
    setBatSide: (batSide) => set({ batSide }),
    setPlayerType: (playerType) => set({ playerType }),
}))