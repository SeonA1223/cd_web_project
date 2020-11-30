import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import img1 from '../images/screen3_1_character.png';
import img2 from '../images/screen3_2_character.png';
import img3 from '../images/screen3_3_character.png';
import leftarrow from '../images/screen3_leftarrow_2.png';
import rightarrow from '../images/screen3_rightarrow_3.png';
import Post01 from './Postit01';

import postit01 from '../images/screen3_1_postit_1.png';
import postit02 from '../images/screen3_1_postit_2.png';

import postit04 from '../images/screen3_2_postit_2.png';
import postit03 from '../images/screen3_2_postit_1.png';

const Container = styled.div`
	position: relative;
	width: 99vw;
	top: -20vw;
	overflow: hidden;
`;

const SliderContainer = styled.div`
	width: 99vw;
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

const Postit01 = styled.img`
	width: 15vw;
	height: auto;
	position: relative;
	visibility: hidden;
	z-index: 11;
	margin-top: -15%;
	left: -25%;
`;

const Postit02 = styled.img`
	width: 15vw;
	height: auto;
	position: relative;
	visibility: hidden;
	z-index: 13;
	margin-top: -30%;
	left: 5%;
`;

const Postit03 = styled.img`
	width: 15vw;
	height: auto;
	position: relative;
	visibility: hidden;
	z-index: 14;
	margin-top: -35%;
	left: -30%;
`;

const Postit04 = styled.img`
	width: 15vw;
	height: auto;
	position: relative;
	visibility: hidden;
	z-index: 15;
	margin-top: 10%;
	left: -3%;
`;

const Postit05 = styled.img`
	width: 100%;
	height: auto;
	position: relative;
	z-index: 16;
	margin-top: -50%;
	left: 5%;
`;

const Postit06 = styled.img`
	width: 100%;
	height: auto;
	position: relative;
	z-index: 17;
	margin-top: -30%;
	left: 5%;
`;

const Box1 = styled.div`
	width: 50vw;
`;

const Img1 = styled.img`
	position: relative;
	width: 100vw;
	z-index: 10;
	height: auto;
`;

const Img2 = styled.img`
	width: 10vw;
	height: auto;
	margin-left: 10%;
`;

const Img3 = styled.img`
	width: 10vw;
	margin-left: 60%;
`;

const LeftArrow = styled.div`
	position: relative;
	top: -55vw;
	width: 95vw;
`;

const TOTAL_SLIDES = 2;

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);
	const postit01Ref = useRef(null);
	const postit02Ref = useRef(null);
	const postit03Ref = useRef(null);
	const postit04Ref = useRef(null);

	const showPost01 = () => {
		return (
			(postit01Ref.current.style.visibility = 'visible'),
			(postit02Ref.current.style.visibility = 'visible')
		);
	};

	const hidePost01 = () => {
		return (
			(postit01Ref.current.style.visibility = 'hidden'),
			(postit02Ref.current.style.visibility = 'hidden')
		);
	};

	const showPost02 = () => {
		return (
			(postit03Ref.current.style.visibility = 'visible'),
			(postit04Ref.current.style.visibility = 'visible')
		);
	};

	const hidePost02 = () => {
		return (
			(postit03Ref.current.style.visibility = 'hidden'),
			(postit04Ref.current.style.visibility = 'hidden')
		);
	};

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
				setTimeout(showPost01, 1000);
				setTimeout(hidePost02, 1000);
				break;
			case 1:
				slideRef.current.style.transform = `translateX(-80%)`;
				setTimeout(hidePost01, 1000);
				setTimeout(showPost02, 1500);
				break;
			case 2:
				slideRef.current.style.transform = `translateX(-160%)`;
				setTimeout(hidePost02, 1000);
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
					<Postit01 ref={postit01Ref} src={postit01} />
					<Postit02 ref={postit02Ref} src={postit02} />
					<Box1 idx={2}>
						<Img1 src={img2} alt='character2' />
					</Box1>
					<Postit03 ref={postit03Ref} src={postit03} />
					<Postit04 ref={postit04Ref} src={postit04} />

					<Box1 idx={3}>
						<Img1 src={img3} alt='character3' />
					</Box1>
				</SliderContainer>
			</Container>
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
		</>
	);
};

export default Carousel;
