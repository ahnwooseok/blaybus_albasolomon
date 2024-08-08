import {useEffect, useRef, useState} from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Survey from "./components/Survey.jsx";
import Survey2 from "./components/Survey2.jsx";
function App() {

    // 각 섹션을 참조하기 위한 ref 생성
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    // 특정 섹션으로 스크롤하는 함수
    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const Section = ({ children }) => {
        const { ref, inView } = useInView({
            triggerOnce: true, // 섹션이 한 번만 애니메이션되도록 설정
            threshold: 0.8, // 10%가 보이면 트리거
        });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }} // 초기 상태
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // inView 상태에 따라 애니메이션
                transition={{ duration: 0.5 }} // 애니메이션 지속 시간
                style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {children}
            </motion.div>
        );
    };
    const images = [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
        'https://via.placeholder.com/300x200?text=Image+3',
        'https://via.placeholder.com/300x200?text=Image+4',
    ];
    const ImageItem = ({ src, index }) => {
        const { ref, inView } = useInView({
            triggerOnce: true, // 한 번만 애니메이션 실행
            threshold: 0.8, // 10%가 보이면 트리거
        });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }} // 초기 상태
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} // inView 상태에 따라 애니메이션
                transition={{ duration: 0.5, delay: index * 0.3 }} // 순차적으로 나타나도록 지연 시간 설정
                style={{ marginRight: '20px' }} // 이미지 간 간격 조정
            >
                <img src={src} alt="image" style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
            </motion.div>
        );
    };

    return (
        <div className={"flexColumn flexAlign-column"} style={{width:"100vw"}} >
            {/*네비게이션*/}
            <div style={{minWidth:"1280px", width:"1280px"}}>
                <div className={"flexRow flexAlign-between h80 bg-White"}>
                    <div className={"flexRow flexAlign-column"}>
                        알바솔로몬
                    </div>

                    <div className={"flexRow flexAlign-column"}>
                        <div className={"w80"} onClick={() => scrollToSection(section1Ref)}>
                            기능소개
                        </div>
                        <div className={"w80"} onClick={() => scrollToSection(section2Ref)}>
                            설문참여
                        </div>
                        <div className={"w80"} onClick={() => scrollToSection(section3Ref)}>
                            문의하기
                        </div>
                    </div>
                </div>
                <div className={"bg-Blue100 h800"}/>
                <div className={"bg-Blue200 h800"}/>
                <Section>
                    <div className={"TitleS28 h80 bg-Blue100"}>텍스트 애니메이션텍스트 애니메이션텍스트 애니메이션텍스트 애니메이션</div>
                </Section>
                <div style={{ display: 'flex', overflowX: 'auto', padding: '20px' }}>
                    {images.map((src, index) => (
                        <ImageItem key={index} src={src} index={index} />
                    ))}
                </div>
                <div className={"bg-Blue400 h800"} ref={section1Ref}/>
                <div className={"bg-Blue500 h800"} ref={section2Ref}>
                    surveysurveysurveysurveysurveysurveysurvey
                    <Survey/>
                </div>
                <div className={"bg-Blue600 h800"} ref={section3Ref}>
                    survey2survey2survey2survey2survey2survey2survey2
                    <Survey2/>
                </div>
            </div>
        </div>
    )
}

export default App
