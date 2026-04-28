
import { useUiStore } from "../../store/useUiStore"
import { usePlayerStore } from "../../store/usePageStore"
import { UserSettings } from "./UserSettings"
import { PositionSelect } from "./PositionSelect"
import { TraitSelect } from "./TraitSelect";
import { useUserStore } from "../../store/useUserStore";
import { toast } from "react-toastify";


export default function Title(){
    const { title, nextTitle, prevTitle } = usePlayerStore(); 
    const { name, school } = useUserStore();
    const { setScene } = useUiStore();

    const handleNextPage = () => {
        if(title === 4){
            
        }
    }
    return(
        <>
            {title == 1 && <UserSettings/>}
            {title == 2 && <PositionSelect/>}
            {title == 3 && <TraitSelect/>}
            
            <button onClick={prevTitle}>
                이전
            </button>
            <button onClick={() => {name === "" ? toast.error("선수정보를 모두 입력하세요..") : nextTitle();}}>
                다음
            </button>
        </>
    )
}