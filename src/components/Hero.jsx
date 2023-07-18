import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import CallBackForm from './CallBackForm';

function Hero({ title = '', highlightWordIndex, imageUrl, desc }) {
	const words = title.split(' ');
	const [isOpen, setIsOpen] = useState();

	return (
		<div className='pt-16 h-screen lg:pt-24 mb-10'>
			<div className='flex flex-col lg:flex-row lg:justify-between'>
				<div className='lg:w-6/12 mx-5 mt-10 lg:mt-14'>
					<h1 className='text-4xl md:text-6xl font-black'>
						{words.map((word, index) =>
							index === highlightWordIndex ? (
								<span
									key={index}
									className='text-primary'
								>
									{word}{' '}
								</span>
							) : (
								<span key={index}>{word} </span>
							)
						)}
					</h1>
					<p className='pt-5 pb-5 text-lg lg:text-xl font-medium'>{desc}</p>
					<div className='flex'>
						<button
							className='btn btn-primary normal-case text-[16px] lg:text-xl lg:btn-lg font-bold'
							onClick={() => setIsOpen(true)}
						>
							Попробовать <BsArrowRight />
						</button>
					</div>
				</div>
				<div className='bg-orange-200 p-5 rounded-2xl mt-6 mx-5 lg:w-8/12 lg:h-[35rem]'>
					<img
						src={imageUrl}
						className='w-full h-full'
						alt='Изображение'
					/>
				</div>
			</div>

			<CallBackForm
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
}

export default Hero;
