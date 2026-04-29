import { useRef } from "react";
import { NATIONAL_SCHOOLS } from "../../arrays/Schools";
import ButtonComponent from "../../components/commons/ButtonComponent";
import { useUserStore } from "../../store/useUserStore";

// 이름 입력(소속고교) 창
export const UserSettings = () => {
    const { name, setName, height, setHeight, weight, setWeight, school, setSchool } = useUserStore();
    // 중복 없는 지역 리스트 추출 (서울, 경기, 인천...)
    const regions = Array.from(new Set(NATIONAL_SCHOOLS.map(s => s.region)));

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // 키,체중 증가 로직
    const handleStart = (type: "height" | "weight", direction: number) => {
        const action = type === "height" ? setHeight : setWeight;
        
        action(prev => prev + direction);

        timerRef.current = setInterval(() => {
            action(prev => prev + direction);
        }, 100);
    };

    const handleStop = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    return (
        <div className="Title">
            <h2>선수의 이름을 설정하세요.</h2>
            <input type="text" 
            placeholder="이름 입력" 
            value={name}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <div className="physical-settings">
                <div className="input-group">
                    <ButtonComponent onMouseDown={() => handleStart("height", -1)} onMouseUp={handleStop} onMouseLeave={handleStop}>-</ButtonComponent>
                    <label>키 (cm): {height}</label>
                    <ButtonComponent onMouseDown={() => handleStart("height", 1)} onMouseUp={handleStop} onMouseLeave={handleStop}>+</ButtonComponent>
                </div>

                <div className="input-group">
                    <ButtonComponent onMouseDown={() => handleStart("weight", -1)} onMouseUp={handleStop} onMouseLeave={handleStop}>-</ButtonComponent>
                    <label>체중 (kg): {weight}</label>
                    <ButtonComponent onMouseDown={() => handleStart("weight", 1)} onMouseUp={handleStop} onMouseLeave={handleStop}>+</ButtonComponent>
                </div>
            </div>
            <h2>선수가 다닐 고등학교를 선택하세요.</h2>
            <div className="school-wrap">
                <div className="school-selector">
                    {regions.map(region => (
                        <div key={region} className="region-box">
                            {/* 지역 타이틀 (서울권, 경기권 등) */}
                            <h3>
                                {region}권
                            </h3>
                            
                            <ul>
                                {NATIONAL_SCHOOLS
                                    .filter(school => school.region === region)
                                    .map(school => (
                                        <li key={school.id}>
                                            <ButtonComponent
                                                cln="school-buttons"
                                                onClick={() => setSchool(school.name)}
                                            >
                                                {school.name}
                                            </ButtonComponent>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    {/** 학교 정보란 */}
                    {school && (
                        <>
                        {/* 선택된 학교 이름과 일치하는 객체 하나만 찾기 */}
                        {(() => {
                            const selectedInfo = NATIONAL_SCHOOLS.find(info => info.name === school);
                            return (
                            <div className="school-info-box">
                                <h4>{selectedInfo?.name}</h4>
                                <p>{selectedInfo?.description}</p>
                                {/* 추가로 지역이나 티어를 보여주고 싶다면 */}
                                <span>지역: {selectedInfo?.region} | 랭크: {selectedInfo?.tier}</span>
                            </div>
                            );
                        })()}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};