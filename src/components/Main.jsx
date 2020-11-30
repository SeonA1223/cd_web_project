import img1 from '../images/dummy1.png';
import img2 from '../images/screen2_nomap_dummy.png';
import map from '../images/screen2_map_2.png';
import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';

const Image1 = styled.img`
	width: 99vw;
	height: 80%;
`;

const Image2 = styled.img`
	position: relative;
	width: 99vw;
	z-index: 0;
	height: auto;
`;

const ImageMap = styled.img`
	position: relative;
	width: 50vw;
	height: auto;
	z-index: 100;
	top: -240vw;
	left: 25%;
	visibility: hidden;
`;

const Main = () => {
	const mapref = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			mapref.current.style.visibility = 'visible';
		}, 3000);
	});

	return (
		<>
			<Image1 src={img1} />

			<Image2 src={img2} />

			<ImageMap ref={mapref} src={map} />
		</>
	);
};

export default Main;
