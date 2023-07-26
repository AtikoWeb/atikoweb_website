import React from 'react';
import Hero from '../../components/Hero';
import VideoCard from '../../components/VideoCard';
import PhotoCard from '../../components/PhotoCard';
import Tarif from '../../components/Tarif';

function Fitness() {
	const tarifs = [
		{ title: 'Фитнес.Квартальный', price: 55000, qtyMonths: '3 месяца' },
		{ title: 'Фитнес.Полугодовой', price: 110000, qtyMonths: '6 месяцев' },
		{ title: 'Фитнес.Годовой', price: 150000, qtyMonths: '12 месяцев' },
	];
	return (
		<>
			<Hero
				title={'Приведите свой бизнес к победе'}
				highlightWordIndex={4}
				imageUrl={'/fitness_hero_img.svg'}
				desc={`Экономьте время, мотивируйте клиентов и достигайте грандиозных результатов вместе с нами`}
			/>
			<div className='mx-5 mb-10'>
				<div className='text-center text-3xl lg:text-5xl mb-5 font-black'>
					<span>Как это работает ?</span>
				</div>
				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<PhotoCard url={'/fit1.jpg'} />

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Меню быстрого доступа
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'></span>
						</div>
					</div>
				</div>

				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<div className='lg:order-1'>
						<PhotoCard url={'/fit4.jpg'} />
					</div>

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Продажа абонементов
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'></span>
						</div>
					</div>
				</div>

				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<PhotoCard url={'/fit3.jpg'} />

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Вход в клуб
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'></span>
						</div>
					</div>
				</div>
				<div className='text-center text-3xl lg:text-5xl mb-5 font-black mt-10'>
					<span>Доступные тарифы</span>
				</div>
				<div className='flex flex-col items-center sm:flex-row sm:justify-center sm:items-center'>
					{tarifs.map((obj) => (
						<Tarif
							title={obj.title}
							price={obj.price}
							qtyMonths={obj.qtyMonths}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Fitness;
