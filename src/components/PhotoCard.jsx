import React from 'react';

function PhotoCard({ url }) {
	return (
		<div className='bg-orange-200 lg:w-[600px] p-5 rounded-2xl mt-6 mb-5 justify-center items-center flex'>
			<img
				src={url}
				alt=''
				className=''
			/>
		</div>
	);
}

export default PhotoCard;
