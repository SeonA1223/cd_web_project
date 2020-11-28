import React from 'react';
import video1 from '../videos/screen4_motion.mp4';
import styled from 'styled-components';


const BSsize = styled.div`
	width: 99vw;
	height: auto;
`;

const Video = styled.video`
	top: 25vh;
	left: 50%;
`;

const BlockSpread = () => {
	return (
		<BSsize>
			<Video width="37.5%" autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>
		</BSsize>
	);
};

export default BlockSpread;
