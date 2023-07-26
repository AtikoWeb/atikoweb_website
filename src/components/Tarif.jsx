import React, { useState } from 'react';
import CallBackForm from './CallBackForm';

function Tarif({ title, price = 0, qtyMonths }) {
	const [isOpen, setIsOpen] = useState();
	return (
		<>
			<div className='w-full max-w-sm p-4 m-5 bg-base-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-700 sm:w-full sm:max-w-sm'>
				<h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
					{title}
				</h5>
				<div className='flex items-baseline text-gray-900 dark:text-white'>
					<span className='text-3xl font-semibold'>₸</span>
					<span className='text-4xl md:text-5xl font-extrabold tracking-tight ml-1'>
						{price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}
					</span>
					<span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
						/{qtyMonths}
					</span>
				</div>
				<ul
					role='list'
					className='space-y-5 my-7'
				>
					<li className='flex space-x-3 items-center'>
						<svg
							className='flex-shrink-0 w-4 h-4 text-primary'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
						</svg>
						<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
							Front office
						</span>
					</li>
					<li className='flex space-x-3'>
						<svg
							className='flex-shrink-0 w-4 h-4 text-primary'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
						</svg>
						<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
							Back office
						</span>
					</li>
					<li className='flex space-x-3'>
						<svg
							className='flex-shrink-0 w-4 h-4 text-primary'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
						</svg>
						<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
							Неограниченное количество пользователей
						</span>
					</li>
					<li className='flex space-x-3'>
						<svg
							className='flex-shrink-0 w-4 h-4 text-primary'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
						</svg>
						<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
							Тех. Поддержка
						</span>
					</li>
					<li className='flex space-x-3'>
						<svg
							className='flex-shrink-0 w-4 h-4 text-primary'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
						</svg>
						<span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
							Автоматические обновления
						</span>
					</li>
				</ul>
				<button
					type='button'
					className='btn btn-primary btn-block normal-case text-lg'
					onClick={() => setIsOpen(true)}
				>
					Выбрать
				</button>
			</div>

			<CallBackForm
				open={isOpen}
				onClose={() => setIsOpen(false)}
				tarif={title}
			/>
		</>
	);
}

export default Tarif;
