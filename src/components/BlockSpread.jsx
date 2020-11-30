import React from 'react';
import video1 from '../videos/screen4_motion.mp4';
import styled from 'styled-components';

const BSsize = styled.div`
	height: auto;
	width: 99vw;
	position: relative;
	top: -20vw;
`;

const Video = styled.video`
	width: 70%;
	margin-left: 20%;
	height: auto;
`;

const BlockSpread = () => {
	return (
		<BSsize>
			<Video autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>
		</BSsize>
	);
};

export default BlockSpread;
