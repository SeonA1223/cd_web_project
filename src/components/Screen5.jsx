import React from 'react';
import styled from 'styled-components';

import video1 from '../videos/screen5_motion.mp4';
import video2 from '../videos/screen5_motion.mp4';

const BSsize = styled.div`
	width: 99vw;
`;

const Video = styled.video`
	top: 25vh;
	left: 50%;
	margin-bottom: 10%;
`;

const Screen5 = () => {
	return (
		<BSsize>
			<Video width='100%' autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>

			<Video width='100%' autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>

			<Video width='100%' autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>

			<Video width='100%' autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>

			<Video width='100%' autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</Video>
		</BSsize>
	);
};

export default Screen5;
