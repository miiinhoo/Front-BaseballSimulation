export const playerArray = [
    {id:"LEFT",type:"throw",name:"좌투"},
    {id:"RIGHT",type:"throw",name:"우투"},
    {id:"LEFT",type:"hit",name:"좌타"},
    {id:"RIGHT",type:"hit",name:"우타"},
    {id:"SWITCH",type:"hit",name:"양타"},
];

export interface Trait {
  id: string;
  category: "STYLE" | "MENTAL" | "PHYSICAL"; // 스타일(중복불가), 멘탈, 신체
  name: string;
  text: string;
  cost: number;
  desc: string;
  buff?: { [key: string]: number };
  debuff?: { [key: string]: number };
}

// 1. 투수 특성 리스트
export const PITCHER_TRAITS: Trait[] = [
  // 투수 고유 특성
  { 
    id: "FIREBALLER", category: "STYLE", name: "Fireballer", text: "파이어볼러", cost: -3, 
    desc: "압도적인 구속을 얻지만, 제구력이 다소 불안정해집니다.",
    buff: { speed: 10 }, debuff: { control: -5 }
  },
  { 
    id: "CONTROLLER", category: "STYLE", name: "Controller", text: "컨트롤 아티스트", cost: -3, 
    desc: "제구력을 얻지만, 구위가 감소합니다.",
    buff: { control: 10 }, debuff: { stuff: -5 }
  },
  { 
    id: "BREAKER", category: "STYLE", name: "Breaker", text: "변화구 장인", cost: -3, 
    desc: "변화구 각도가 예리해지지만, 직구의 구속이 감소합니다.",
    buff: { breaking: 10 }, debuff: { speed: -5 }
  },
  
  // 멘탈 및 기타
  { 
    id: "STRONG_HEART", category: "MENTAL", name: "Strong Heart", text: "강심장", cost: -2, 
    desc: "주자가 있는 위기 상황에서 모든 능력치가 상승합니다.",
    buff: { mental: 10 }
  },
  { 
    id: "WEAK_HEART", category: "MENTAL", name: "Weak Heart", text: "새가슴", cost: 2, // 포인트 환급
    desc: "주자가 나가면 제구력이 급격히 흔들립니다.",
    debuff: { control: -10 }
  }
];

// 2. 타자 특성 리스트
export const BATTER_TRAITS: Trait[] = [
  // 타자 고유 특성
  { 
    id: "POWER_HITTER", category: "STYLE", name: "Power Hitter", text: "파워 히터", cost: -3, 
    desc: "비거리가 크게 늘어나지만, 정확하게 맞히는 능력이 감소합니다.",
    buff: { power: 10 }, debuff: { contact: -5 }
  },
  { 
    id: "CONTACT_HITTER", category: "STYLE", name: "Contact Hitter", text: "교타자", cost: -3, 
    desc: "안타를 만드는 능력이 탁월해지지만, 장타력이 감소합니다.",
    buff: { contact: 10 }, debuff: { power: -5 }
  },

  // 멘탈 및 기타
  { 
    id: "CLUTCH_HITTER", category: "MENTAL", name: "Clutch Hitter", text: "찬스에 강함", cost: -2, 
    desc: "득점권 찬스에서 집중력이 높아져 안타 확률이 상승합니다.",
    buff: { contact: 7, mental: 5 }
  },
  { 
    id: "CHOKE_HITTER", category: "MENTAL", name: "Choke Hitter", text: "찬스에 약함", cost: 2, // 포인트 환급
    desc: "중요한 득점 기회에서 긴장하여 헛스윙 확률이 높아집니다.",
    debuff: { contact: -10, mental: -5 }
  },
  {
    id: "SPEED_STAR", category: "PHYSICAL", name: "Speed Star", text: "대도", cost: -2,
    desc: "도루 성공률과 주력이 대폭 상승합니다.",
    buff: { speed: 10 }
  }
];