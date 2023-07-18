import React from 'react';
import Hero from '../../components/Hero';
import VideoCard from '../../components/VideoCard';
import PhotoCard from '../../components/PhotoCard';

function Fastfood() {
	return (
		<>
			<Hero
				title={'вкус, скорость и безупречность'}
				highlightWordIndex={1}
				imageUrl={'/fastfood_hero_img.svg'}
				desc={`Экономьте время, мотивируйте клиентов и достигайте грандиозных результатов вместе с нами`}
			/>
			<div className='mx-5 mb-10'>
				<div className='text-center text-3xl lg:text-5xl mb-5 font-black'>
					<span>Как это работает ?</span>
				</div>
				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<VideoCard url={'/calc.mp4'} />

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Расчёт себестоимости и калькуляция
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'>
								Добро пожаловать в мир кулинарной математики
							</span>
						</div>
					</div>
				</div>

				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<div className='lg:order-1'>
						<PhotoCard url={'/fastfood1.png'} />
					</div>

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Модуль доставки
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'>
								Забудьте о заморочках с организацией доставки
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Fastfood;
