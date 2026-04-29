import { playerArray } from "../../arrays/Trait"
import ButtonComponent from "../../components/commons/ButtonComponent"
import { useUserStore } from "../../store/useUserStore";

// 특성 선택 창
export const TraitSelect = () => {
    const { setThrowHand,setBatSide } = useUserStore();

    const throwOptions = playerArray.filter((p) => p.type === "throw");

    const hitOptions = playerArray.filter((p) => p.type === "hit");

    return(
        <>
            <h2>
                특성을 선택하세요
            </h2>
            {/** 투/타 공통 */}
            <div className="throw-content">
                {throwOptions.map((opt) => (
                    <ButtonComponent key={opt.id} onClick={() => setThrowHand(opt.id as "LEFT" | "RIGHT")}>
                        {opt.name}
                    </ButtonComponent>
                ))}
            </div>
            <div className="hit-content">
                {hitOptions.map((opt) => (
                    <ButtonComponent key={opt.id} onClick={() => setBatSide(opt.id as "LEFT" | "RIGHT" | "SWITCH")}>
                        {opt.name}
                    </ButtonComponent>
                ))}
            </div>
        </>
    )
}