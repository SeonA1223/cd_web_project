import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import img1 from '../images/screen3_character_dummy_1.png';
import img2 from '../images/screen3_character_dummy_2.png'
import leftarrow from '../images/screen3_leftarrow.png';
import rightarrow from '../images/screen3_rightarrow.png'

const Container = styled.div`
width: 100%;
overflow: hidden;
`;

const SliderContainer = styled.div`
width:100%;
display: flex;
position: relative;
z-index: 1;
`;

const Img1 = styled.img`
width:100%;
height: auto;
`;

const Img2 = styled.img`
width:15%;
height: auto;
`;

const Img3 = styled.img`
width:15%;
height: auto;
margin-left: 65%
`;

const LeftArrow = styled.div`
position: relative;
z-index: 2;
margin-top :-35%;
margin-left : 5%;
`;

const TOTAL_SLIDES = 2;



const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
          } else {
            setCurrentSlide(currentSlide + 1);
          }
        };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
            }
        };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
      }, [currentSlide]);
    
    return(
    <Container>
        <SliderContainer ref={slideRef}>
            <Img1 src={img1}/>
            <Img1 src={img2}/>
        </SliderContainer>
        <LeftArrow>
            <button type ="button" onClick={prevSlide} ><Img2 src={leftarrow} /></button>
            <button type ="button" onClick={nextSlide} ><Img3 src={rightarrow} /></button>
        </LeftArrow>
    </Container>
    )
}

export default Carousel;
