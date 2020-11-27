import React from 'react';
import ReactPlayer from 'react-player';
import video1 from '../videos/screen4_motion.mov';

const BlockSpread = () => {
	return (
		<>
			<video autoPlay loop muted>
				<source src={video1} type='video/mp4' />
			</video>
		</>
	);
};

export default BlockSpread;
