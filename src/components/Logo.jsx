import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link
			to='/'
			className='normal-case font-extrabold flex'
		>
			<div className='mr-1 mt-3 text-4xl'>
				<span className='dark:text-white'>Atiko</span>
			</div>
			<div className='bg-primary h-10 text-4xl mt-2 w-24 flex justify-center rounded-lg'>
				<span className='text-white'>Web</span>
			</div>
		</Link>
	);
}

export default Logo;
