import { useUserStore, type BatterPos, type PitcherRole } from "../../store/useUserStore";

// 포지션 선택 창
export const PositionSelect = () => {

    const { pos, setMainPos, setDetailPos } = useUserStore();

    // 포지션
    const pitcherRoles = ["SP", "RP", "CP"];
    const batterPositions = ["C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"];

    const currentOptions = pos === "투수" ? pitcherRoles : batterPositions;

    return(
        <>
            <h2>
                포지션을 선택하세요
            </h2>
            <select
            onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                const value = e.target.value;
                setMainPos(value as "투수" | "타자")
            }}
            >
                <option disabled>선택하세요</option>
                <option value="투수">투수</option>
                <option value="타자">타자</option>
            </select>
            <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                const value = e.target.value;
                // value타입
                setDetailPos(value as PitcherRole | BatterPos);
            }}>
                {currentOptions.map(li => (
                    <option key={li} value={li}>{li}</option>
                ))}
            </select>
            
        </>
    )
}