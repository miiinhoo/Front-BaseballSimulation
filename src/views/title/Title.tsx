
import { useUiStore } from "../../store/useUiStore"
import { usePlayerStore } from "../../store/usePageStore"
import { UserSettings } from "./UserSettings"
import { PositionSelect } from "./PositionSelect"
import { TraitSelect } from "./TraitSelect";
import { useUserStore } from "../../store/useUserStore";
import { toast } from "react-toastify";


export default function Title(){
    const title = usePlayerStore((state) => state.title as number);

    const { nextTitle, prevTitle } = usePlayerStore(); 
    const { name, detailPos, school,throwHand,batSide } = useUserStore();
    const { setScene } = useUiStore();

    const handleNextPage = () => {
        if (title === 1) {
            if (name.trim() === "" || school === "") {
                toast.error("선수 이름과 학교를 모두 설정해주세요.");
                return;
            }
        } 
        else if (title === 2) {
            if (detailPos === "") {
                toast.error("세부 포지션을 선택해야 합니다.");
                return;
            }
        } 
        // else if (title === 3) {
        //     if (throwHand === "") {
        //         toast.error("특성을 하나 선택해주세요.");
        //         return;
        //     }
        //     setScene("LOBBY");
        //     return;
        // }

        // 여기까지 왔다는 건 해당 단계의 검증을 통과했다는 뜻이므로 다음 단계로 이동
        nextTitle();
    };
    return(
        <>
            {title == 1 && <UserSettings/>}
            {title == 2 && <PositionSelect/>}
            {title == 3 && <TraitSelect/>}
            
            {title > 1 && <button onClick={prevTitle}>이전</button>}
            <button onClick={handleNextPage}>
                {title === 3 ? "생성 완료" : "다음"}
            </button>
        </>
    )
}