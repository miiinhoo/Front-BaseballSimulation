import { NATIONAL_SCHOOLS } from "../../arrays/Schools"
import { useUiStore } from "../../store/useUiStore"
import { usePlayerStore } from "../../store/usePageStore"

// 이름 입력(소속고교) 창
const UserSettings = () => {
    // 중복 없는 지역 리스트 추출 (서울, 경기, 인천...)
    const regions = Array.from(new Set(NATIONAL_SCHOOLS.map(s => s.region)));

    return (
        <>
            <h2>선수의 이름을 설정하세요.</h2>
            <input type="text" placeholder="이름 입력" />

            <h2>선수가 다닐 고등학교를 선택하세요.</h2>
            <div className="school-selector" style={{ textAlign: 'left', maxHeight: '400px', overflowY: 'auto' }}>
                {regions.map(region => (
                    <div key={region} style={{ marginBottom: '20px' }}>
                        {/* 지역 타이틀 (서울권, 경기권 등) */}
                        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>
                            {region}권
                        </h3>
                        
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {NATIONAL_SCHOOLS
                                .filter(school => school.region === region)
                                .map(school => (
                                    <li key={school.id}>
                                        <button 
                                            style={{ padding: '5px 10px', cursor: 'pointer' }}
                                            onClick={() => console.log(`${school.name} 선택됨`)}
                                        >
                                            {school.name}
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

// 포지션 선택 창
const PositionSelect = () => {
    return(
        <>
            <h2>
                포지션을 선택하세요
            </h2>
            <select name="" id="">
                <option value="투수"></option>
                <option value="타자"></option>
            </select>
        </>
    )
}
// 특성 선택 창
const TraitSelect = () => {
    return(
        <>
            <h2>
                특성을 선택하세요
            </h2>
            <select name="" id=""></select>
        </>
    )
}

export default function Title(){
    const { title, nextTitle, prevTitle } = usePlayerStore(); 
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
            <button onClick={nextTitle}>
                다음
            </button>
        </>
    )
}