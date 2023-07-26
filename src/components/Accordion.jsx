import React, { useState } from 'react';

function Accordion() {
	const [coloredIndex, setColoredIndex] = useState(-1);

	const handleAccordionClick = (index) => {
		if (coloredIndex === index) {
			// Если текущий заголовок уже окрашен, ничего не меняем
			return;
		}

		// Устанавливаем новый индекс заголовка
		setColoredIndex(index);
	};

	const data = [
		{
			question: 'Что такое AtikoWeb?',
			answer:
				'Это онлайн сервис учета который подходит для объектов Retail и Horeca - это торговые точки и крупные каналы продаж, а также объекты общественного питания',
		},
		{
			question: 'Что входит в абонентскую плату?',
			answer:
				'1. Доступ к сервису AtikoWEB 24/7\n2. Автоматические обновления Back Office и Front Office\n3. Базовая техническая поддержка с 10:00 до 20:00 по времени Алматы',
		},
		{
			question: 'Сколько стоят пуско-наладочные работы?',
			answer:
				'Для пользователей оборудования бренда AOKIA все работы будет проведены БЕСПЛАТНО. Оборудование других брендов настраивается за дополнительную плату, в зависимости сложности установки и настройки',
		},
		{
			question: 'Как перейти с другой программы на AtikoWeb?',
			answer:
				'Миграция с любого сервиса осуществляется БЕСПЛАТНО.\n Наши специалисты помогут вам осуществить перенос данных.\n Добро пожаловать!',
		},
	];

	return (
		<>
			{data.map((obj, index) => (
				<div
					className='collapse collapse-arrow bg-base-100 mb-3 shadow-xl'
					onClick={() => handleAccordionClick(index)}
				>
					<input
						type='radio'
						name='my-accordion-2'
					/>
					<div
						className={`collapse-title text-xl font-bold ${
							coloredIndex == index && 'text-primary'
						}`}
					>
						{obj.question}
					</div>
					<div className='collapse-content'>
						{/* Проверяем, является ли ответ списком */}
						{obj.answer.includes('\n') ? (
							<ul>
								{/* Разделяем ответ на отдельные строки и отображаем каждую строку как элемент списка */}
								{obj.answer.split('\n').map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						) : (
							// Если ответ не является списком, отображаем его как обычный параграф
							<p>{obj.answer}</p>
						)}
					</div>
				</div>
			))}
		</>
	);
}

export default Accordion;
