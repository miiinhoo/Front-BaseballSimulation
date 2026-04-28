export interface School {
  id: string;
  name: string;
  region: string;
  tier: 'S' | 'A' | 'B' | 'C';
  description: string;
}

export const NATIONAL_SCHOOLS: School[] = [
  // --- 서울권 ---
  { id: 'DEOKSU', name: '덕수고', region: '서울', tier: 'S', description: '빈틈없는 수비와 조직력의 끝판왕' },
  { id: 'WHIMON', name: '휘문고', region: '서울', tier: 'S', description: '전통의 야구 명문, 화려한 스타 플레이어들의 산실' },
  { id: 'JANGCHUNG', name: '장충고', region: '서울', tier: 'A', description: '강력한 투수진을 앞세운 서울의 강호' },
  { id: 'CHUNGAM', name: '충암고', region: '서울', tier: 'A', description: '끈질긴 승부근성과 독특한 훈련법의 팀' },
  { id: 'SEOUL', name: '서울고', region: '서울', tier: 'A', description: '언제나 우승 후보로 거론되는 탄탄한 전력' },
  { id: 'SUNRIN', name: '선린인터넷고', region: '서울', tier: 'B', description: '역사와 전통을 자랑하는 역전의 명수' },

  // --- 경기/인천권 ---
  { id: 'YUSHIN', name: '유신고', region: '경기', tier: 'S', description: '최근 전국대회를 휩쓰는 경기도의 자존심' },
  { id: 'YATAP', name: '야탑고', region: '경기', tier: 'A', description: '공수 밸런스가 뛰어난 신흥 강자' },
  { id: 'INCHEON', name: '인천고', region: '인천', tier: 'A', description: '인천 야구의 자부심, 투지 넘치는 플레이' },
  { id: 'DONGSAN', name: '동산고', region: '인천', tier: 'B', description: '수많은 전설적인 투수를 배출한 학교' },
  { id: 'RAON', name: '라온고', region: '경기', tier: 'C', description: '기적을 쓰는 무서운 돌풍의 주역' },

  // --- 경상권 ---
  { id: 'GYEONGBUK', name: '경북고', region: '대구', tier: 'S', description: '한국 야구 역사와 함께하는 최다 우승고교' },
  { id: 'BUSAN', name: '부산고', region: '부산', tier: 'S', description: '부산 야구의 상징, 폭발적인 타격의 팀' },
  { id: 'GYEONGNAM', name: '경남고', region: '부산', tier: 'A', description: '부산고와 쌍벽을 이루는 전통의 라이벌' },
  { id: 'DAEGU', name: '대구고', region: '대구', tier: 'A', description: '끈끈한 팀워크로 고비마다 승리하는 팀' },
  { id: 'YONGMA', name: '마산용마고', region: '경남', tier: 'B', description: '경남 지역을 대표하는 강력한 투수력' },

  // --- 충청/전라/기타 ---
  { id: 'GWANGJU_ILGO', name: '광주일고', region: '전라', tier: 'S', description: '메이저리거들을 대거 배출한 호남 야구의 요람' },
  { id: 'BUKIL', name: '북일고', region: '충청', tier: 'S', description: '충청권 최강, 프로급 시설과 탄탄한 지원' },
  { id: 'SEKWANG', name: '세광고', region: '충청', tier: 'A', description: '청주 야구의 자존심, 투수 육성의 명가' },
  { id: 'GUNSAN', name: '군산상일고', region: '전라', tier: 'B', description: '역전의 명수, 끝까지 포기하지 않는 근성' },
  { id: 'KANGNEUNG', name: '강릉고', region: '강원', tier: 'A', description: '강원도 야구의 자존심, 지략적인 야구의 정수' },
  { id: 'JEJU', name: '제주고', region: '제주', tier: 'C', description: '섬마을의 기적을 꿈꾸는 열정의 팀' }
];