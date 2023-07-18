import React from 'react';
import ReactPlayer from 'react-player';

function VideoCard({ url }) {
	return (
		<div className='bg-orange-200 lg:w-96 p-5 rounded-2xl mt-6 mb-5 justify-center items-center flex'>
			<ReactPlayer
				url={url}
				playing
				playsinline
				muted
				loop
				width='60%'
				height='100%'
				config={{
					file: {
						attributes: {
							style: {
								borderRadius: '15px',
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default VideoCard;
