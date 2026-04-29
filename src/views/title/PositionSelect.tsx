import { useUserStore, type BatterPos, type PitcherRole } from "../../store/useUserStore";

// 포지션 선택 창
export const PositionSelect = () => {

    const { detailPos, setMainPos, setDetailPos } = useUserStore();

    // 포지션
    const allPositions = [
        { id: "SP",main: "투수", label: "선발", top: "45%", left: "45%", class:"pitcher" },
        { id: "RP",main: "투수", label: "중계", top: "45%", left: "50%", class:"pitcher"  },
        { id: "CP",main: "투수", label: "마무리", top: "45%", left: "55%", class:"pitcher"  },
        { id: "C" ,main: "타자", label: "포수", top: "60%", left: "50%", class:"catcher"  },
        { id: "1B",main: "타자", label: "1루수", top: "37%", left: "63%", class:"infielder"   },
        { id: "2B",main: "타자", label: "2루수", top: "28%", left:"58%", class:"infielder"  },
        { id: "SS",main: "타자", label: "유격수", top: "28%", left: "42%", class:"infielder"   },
        { id: "3B",main: "타자", label: "3루수", top: "37%", left: "37%", class:"infielder"  },
        { id: "LF",main: "타자", label: "좌익수", top: "21%", left: "35%", class:"outfielder"  },
        { id: "CF",main: "타자", label: "중견수", top: "15%", left: "50%", class:"outfielder"  },
        { id: "RF",main: "타자", label: "우익수", top: "21%", left: "65%", class:"outfielder"  },
        { id: "DH",main: "타자", label: "지명타자", top: "60%", left: "58%", class:"dh"  },
    ];

    return(
        <div className="Title Pos">
            <h2>
                포지션을 선택하세요
            </h2>
            {allPositions.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => {
                            setMainPos(p.main as "투수" | "타자");
                            setDetailPos(p.id as PitcherRole | BatterPos);
                        }}
                        style={{
                            position: 'absolute',
                            top: p.top,
                            left: p.left,
                            transform: 'translate(-50%, -50%)',
                            padding: '8px 12px',
                            cursor: 'pointer',
                            borderRadius: '15px',
                            border: '2px solid #333',
                            backgroundColor: detailPos === p.id ? '#ffdf00' : '#fff',
                            fontWeight: detailPos === p.id ? 'bold' : 'normal',
                            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
                        }}
                    >
                        {p.id}
                        <span className={p.class}>
                            {/** 이미지 */}
                        </span>
                        {p.label}
                    </button>
            ))}
        </div>
    )
}