import { useRef, useState, Fragment } from 'react';
import axios from 'axios';
import { Transition, Dialog } from '@headlessui/react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { AsYouType } from 'libphonenumber-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CallBackForm({ open = false, onClose, tarif = '' }) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const cancelButtonRef = useRef(null);

	const showErrorToast = (message) => {
		toast.warning(message, {
			position: 'top-center',
			autoClose: 3000,
			className: 'rounded-xl bg-base-100',
		});
	};

	const htmlBody = `

		
			<div
				style="
					width: 100%;
					max-width: 20rem;
					padding: 1rem;
					margin: auto;
					border-radius: 1rem;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					background-color: #f3f4f6;
				"
			>
				<div
					style="
						display: flex;
						flex-direction: column;
						margin: auto;
						text-align: center;
					"
				>
					<div style="display: flex; justify-content: center">
						<span style="font-size: 100px">☎️</span>
					</div>
					<h1 style="font-weight: bold; color: #2d2d2e; font-size: x-large">
						${name}
					</h1>
					<h2 style="font-weight: bold; color: #858586; flex-decoration: none">${phone}</h2>
					${tarif ? `<h2 style="font-weight: bold; color: #858586">${tarif}</h2>` : ''}
					

					<h2 style="font-weight: bold; color: #2d2d2e">${city}</h2>
				</div>
			</div>
	
       
`;

	const sendFormData = () => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.post('http://192.168.0.121:8888/mail', {
					subject: 'Новая заявка', // Тема письма
					html: htmlBody, // Тело письма в формате HTML
				});

				if (response.status === 200) {
					console.log('Письмо успешно отправлено');
					resolve(response.data); // Письмо успешно отправлено, разрешаем промис
				} else {
					console.log('Ошибка при отправке письма');
					reject(new Error('Ошибка при отправке письма')); // Ошибка при отправке, отклоняем промис
				}
			} catch (error) {
				console.error('Ошибка при отправке данных', error);
				reject(error); // Ошибка при общении с сервером, отклоняем промис
			}
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			if (!name) {
				return showErrorToast('Введите свое имя!');
			}

			if (!phone) {
				return showErrorToast('Введите свой телефон!');
			}

			if (!city) {
				return showErrorToast('Введите свой город!');
			}

			toast.promise(sendFormData(), {
				pending: 'Отправка данных...', // Загрузка, пока промис ожидает выполнения
				success: 'Письмо успешно отправлено!', // Промис выполнен успешно
				error: 'Ошибка при отправке письма!', // Промис был отклонен
			});

			sendFormData(); // Вызов функции отправки данных
			setName('');
			setPhone('');
			onClose();
		} catch (error) {
			console.error('Ошибка при отправке данных', error);
		}
	};

	const handlePhoneInput = (e) => {
		const phoneNumber = e.target.value;
		const asYouType = new AsYouType('KZ');
		const formattedPhoneNumber = asYouType.input(phoneNumber); // Форматируем вводимое значение

		setPhone(formattedPhoneNumber); // Сохраняем отформатированное значение в state
	};

	return (
		<Transition.Root
			show={open}
			as={Fragment}
		>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={onClose}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 backdrop-blur-md transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center text-center sm:items-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transform w-screen p-12 overflow-hidden md:rounded-3xl rounded-t-3xl backdrop-blur-2xl bg-white/[.6] dark:bg-[#1D222A]/[.8] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<div
									className='absolute right-2 top-2 btn btn-ghost btn-circle'
									onClick={onClose}
								>
									<IoCloseCircleSharp
										size={40}
										className='text-black/[.5] dark:text-white/[.5]'
									/>
								</div>
								<div className='mb-5'>
									<label
										for='name'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Имя
									</label>
									<input
										type='name'
										id='name'
										className='shadow-sm bg-black/[.1]  border-gray-300 text-gray-900 text-[16px] rounded-lg block w-full p-2.5 dark:bg-white/[.1] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
										placeholder='Иван Иванов'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className='mb-5'>
									<label
										for='phone'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Телефон
									</label>
									<input
										type='phone'
										id='phone'
										className='shadow-sm bg-black/[.1]  text-gray-900 text-[16px] rounded-lg  block w-full p-2.5 dark:bg-white/[.1] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light'
										placeholder='+7 777 77-77'
										value={phone}
										onInput={handlePhoneInput}
									/>
								</div>
								{tarif.length === 0 ? (
									''
								) : (
									<div className='mb-5'>
										<label
											for='phone'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
										>
											Тариф
										</label>
										<div className='shadow-sm bg-black/[.1] text-gray-900 text-[16px] rounded-lg  block w-full p-2.5 dark:bg-white/[.1] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light'>
											{tarif}
										</div>
									</div>
								)}

								<div>
									<label
										for='city'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Город
									</label>
									<input
										id='city'
										className='shadow-sm bg-black/[.1]  text-gray-900 text-[16px] rounded-lg  block w-full p-2.5 dark:bg-white/[.1] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light'
										placeholder='Ваш город'
										value={city}
										onChange={(e) => setCity(e.target.value)}
									/>
								</div>

								<div className='flex justify-center mt-8'>
									<button
										type='submit'
										className='btn btn-primary text-[15px] normal-case btn-wide font-bold'
										onClick={handleSubmit}
									>
										Хочу попробовать
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
