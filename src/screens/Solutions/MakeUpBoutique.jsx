import React from 'react';
import Hero from '../../components/Hero';
import VideoCard from '../../components/VideoCard';
import PhotoCard from '../../components/PhotoCard';
import Tarif from '../../components/Tarif';

function MakeUpBoutique() {
	const tarifs = [
		{ title: 'Помесячный', price: 7500, qtyMonths: 'месяц' },
		{ title: 'Годовой', price: 65000, qtyMonths: '12 месяцев' },
	];

	return (
		<>
			<Hero
				title={'Блеск и эффективность'}
				highlightWordIndex={2}
				imageUrl={'/makeup_boutique_hero_img.svg'}
				desc={`Возьмите на себя контроль над вашим бизнесом и добейтесь непревзойденного конкурентного преимущества `}
			/>
			<div className='mx-5 mb-10'>
				<div className='text-center text-3xl lg:text-5xl mb-5 font-black'>
					<span>Как это работает ?</span>
				</div>

				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<VideoCard url={'/atiko.mp4'} />

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Ваши отчеты всегда под рукой
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'>
								Просматривайте свои отчеты где угодно, даже в отпуске
							</span>
						</div>
					</div>
				</div>
				<div className='lg:flex items-center justify-center mb-16 lg:mb-0'>
					<div className='lg:order-1'>
						<VideoCard url={'/atiko2.mp4'} />
					</div>

					<div className='lg:mx-20'>
						<div className=''>
							<span className='text-2xl lg:text-4xl font-bold'>
								Отслеживайте каждую монету
							</span>
						</div>
						<div>
							<span className='text-xl lg:text-2xl text-gray-500'>
								Проверяйте кассу и прибыль не приходя в магазин
							</span>
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

export default MakeUpBoutique;
