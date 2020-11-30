import React from 'react';
import video1 from '../videos/screen5_motion.mp4';
import styled from 'styled-components';

const BSsize = styled.div`
	width: 99vw;
`;

const Video = styled.video`
	top: 25vh;
	left: 50%;
`;

const Screen5 = () => {
	return (
		<BSsize>
			<Video width='100%' autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>
		</BSsize>
	);
};

export default Screen5;
