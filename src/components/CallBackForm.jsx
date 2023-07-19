import { useRef, useState, Fragment } from 'react';
import sgMail from '@sendgrid/mail';
import { Transition, Dialog } from '@headlessui/react';
import { IoCloseCircleSharp } from 'react-icons/io5';

sgMail.setApiKey(
	'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'
);

export default function CallBackForm({ open = false, onClose }) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const cancelButtonRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const msg = {
				to: 'timmy.shiyanov@gmail.com', // Ваш email
				from: 'dev.atikoweb@gmail.com', // Ваш SendGrid Sender
				subject: 'Новая заявка',
				text: `Имя: ${name}\nТелефон: ${phone}`,
			};

			await sgMail.send(msg);
			setName('');
			setPhone('');
			onClose();
		} catch (error) {
			console.error('Ошибка при отправке данных', error);
		}
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
							<Dialog.Panel className='relative transform w-screen p-12 overflow-hidden rounded-3xl backdrop-blur-2xl bg-white/[.6] dark:bg-black/70 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<div
									className='absolute right-2 top-2 btn btn-ghost btn-circle'
									onClick={onClose}
								>
									<IoCloseCircleSharp
										size={40}
										className='text-gray-500'
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
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
										placeholder='Иван Иванов'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div>
									<label
										for='phone'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Телефон
									</label>
									<input
										type='phone'
										id='phone'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
										placeholder='+7 777 77-77'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
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
