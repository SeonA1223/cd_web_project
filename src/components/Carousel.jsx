import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import img1 from '../images/screen3_character_dummy_1.png';
import img2 from '../images/screen3_character_dummy_2.png';
import leftarrow from '../images/screen3_leftarrow.png';
import rightarrow from '../images/screen3_rightarrow.png';
import Post01 from './Postit01';

import postit01 from '../images/screen3_1_postit_dummy_1.png';
import postit02 from '../images/screen3_1_postit_dummy_2.png'

const Container = styled.div`
	width: 99vw;
	height: 80vh;
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

const Postit01 = styled.img`
    width: 10vw;
    height: auto;
    position:relative;
	visibility: hidden;
    z-index: 11;
    margin-top: -15%;
    left: -25%;

`;

const Postit02 = styled.img`
    width: 10vw;
    height: auto;
    position:relative;
	visibility: hidden;
    z-index: 13;
    margin-top: -30%;
    left: 5%;

`;

const Postit03 = styled.img`
    width: 100%;
    height: auto;
    position:relative;
    z-index: 14;
    margin-top: -30%;
    left: 5%;

`;

const Postit04 = styled.img`
    width: 100%;
    height: auto;
    position:relative;
    z-index: 15;
    margin-top: -30%;
    left: -10%;

`;

const Postit05 = styled.img`
    width: 100%;
    height: auto;
    position:relative;
    z-index: 16;
    margin-top: -50%;
    left: 5%;

`;

const Postit06 = styled.img`
    width: 100%;
    height: auto;
    position:relative;
    z-index: 17;
    margin-top: -30%;
    left: 5%;

`;

const Box = styled.div`
	width: 50vw;
`

const Box1 = styled.div`
	width: 50vw;
`;

const Img1 = styled.img`
	width: 100vw;
	height: auto;
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
	z-index: 10;
	width : 95vw;
	margin-top: -35%;
	margin-left: 5%;
`;

const TOTAL_SLIDES = 2;



const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);
	const postit01Ref = useRef(null);
	const postit02Ref = useRef(null);


	const showPost01 = () => {
		return (
			postit01Ref.current.style.visibility = "visible",
			setTimeout(() => {postit02Ref.current.style.visibility = "visible"}, 1000)
			)
		};

		const hidePost01 = () => {
			return (
				postit01Ref.current.style.visibility = "hidden",
				postit02Ref.current.style.visibility = "hidden"
				)
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
				setTimeout(showPost01, 2000);
				break;
			case 1:
				slideRef.current.style.transform = `translateX(-50%)`;
				setTimeout(hidePost01, 1000);

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
                    <Postit01 ref={postit01Ref} src={postit01} />
					<Postit02 ref={postit02Ref} src={postit02} />
					<Box idx={2}>
						<Img1 src={img2} alt='character2' />
					</Box>
					<Postit03 src={postit01} />
					<Postit04  src={postit02} />
					<Box idx={3}>
						<Img1 src={img1} alt='character3' />
					</Box>
					<Postit05  src={postit01} />
					<Postit06  src={postit02} />
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
