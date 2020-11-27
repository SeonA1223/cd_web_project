import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import img1 from '../images/screen3_character_dummy_1.png';
import img2 from '../images/screen3_character_dummy_2.png';
import leftarrow from '../images/screen3_leftarrow.png';
import rightarrow from '../images/screen3_rightarrow.png';
import Post01 from './Postit01';

const Container = styled.div`
	width: 99vw;
	height: 1085px;
	overflow: hidden;
`;

const SliderContainer = styled.div`
	width: 99vw;
	height: auto;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

const Box = styled.div`
	width: 50vw;
`;

const Box1 = styled.div`
	width: 50vw;
`;

const Img1 = styled.img`
	width: 100vw;
	hegith: auto;
`;

const Img2 = styled.img`
	width: 15%;
	height: auto;
`;

const Img3 = styled.img`
	width: 15%;
	height: auto;
	margin-left: 65%;
`;
const LeftArrow = styled.div`
	position: relative;
	z-index: 100;
	margin-top: -35%;
	margin-left: 5%;
`;

const TOTAL_SLIDES = 2;

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);

	const nextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			// 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
			setCurrentSlide(TOTAL_SLIDES);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};
	const prevSlide = () => {
		if (currentSlide < 0) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out'; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
		switch (currentSlide) {
			case 0:
				slideRef.current.style.transform = `translateX(0%)`;
				setTimeout(Post01, 1000);
				break;
			case 1:
				slideRef.current.style.transform = `translateX(-50%)`;
				break;
			case 2:
				slideRef.current.style.transform = `translateX(-100%)`;
				break;
		}
	}, [currentSlide]);

	return (
		<>
			<Container>
				<SliderContainer ref={slideRef}>
					<Box1 idx={1}>
						<Img1 src={img1} alt='character1' />
					</Box1>
					<Box idx={2}>
						<Img1 src={img2} alt='character2' />
					</Box>
					<Box idx={3}>
						<Img1 src={img1} alt='character3' />
					</Box>
				</SliderContainer>
				<LeftArrow>
					{currentSlide <= 0 ? (
						<Img2
							style={{ visibility: 'hidden' }}
							onClick={prevSlide}
							src={leftarrow}
						/>
					) : (
						<Img2 onClick={prevSlide} src={leftarrow} />
					)}
					{currentSlide >= TOTAL_SLIDES ? null : (
						<Img3 onClick={nextSlide} src={rightarrow} />
					)}
				</LeftArrow>
			</Container>
		</>
	);
};

export default Carousel;
