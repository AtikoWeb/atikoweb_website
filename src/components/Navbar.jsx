import { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import {
	IoCloseCircleSharp,
	IoBeerSharp,
	IoFitnessSharp,
} from 'react-icons/io5';
import {
	FaShoppingBasket,
	FaTshirt,
	FaPumpSoap,
	FaCoffee,
} from 'react-icons/fa';
import { MdFastfood, MdOutlineRestaurantMenu } from 'react-icons/md';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import CategoryCard from './CategoryCard';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FcDocument } from 'react-icons/fc';

function Navbar() {
	const [hasShadow, setHasShadow] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

			if (scrollPosition > 0) {
				setHasShadow(true);
			} else {
				setHasShadow(false);
			}
		};

		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth <= 768) {
				// Установите нужную вам ширину экрана для мобильных устройств
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		handleResize(); // Проверьте размер экрана при монтировании компонента

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const solutions = [
		{
			title: 'Продуктовый',
			id: 0,
			icon: <FaShoppingBasket size={25} />,
			link: '/grocery',
		},
		{
			title: 'Фастфуд',
			id: 1,
			icon: <MdFastfood size={25} />,
			link: '/fastfood',
		},
		{
			title: 'Бутик одежды',
			id: 2,
			icon: <FaTshirt size={25} />,
			link: '/clothes-boutique',
		},
		{
			title: 'Бутик косметики',
			id: 3,
			icon: <FaPumpSoap size={25} />,
			link: '/makeup-boutique',
		},
		{
			title: 'Ресторан / кафе',
			id: 4,
			icon: <MdOutlineRestaurantMenu size={25} />,
			link: '/restaurant & cafe',
		},
		{
			title: 'Кофейня',
			id: 4,
			icon: <FaCoffee size={25} />,
			link: '/coffeee-house',
		},

		{ title: 'Бар', id: 4, icon: <IoBeerSharp size={25} />, link: '/bar' },
		{
			title: 'Фитнес',
			id: 6,
			icon: <IoFitnessSharp size={25} />,
			link: '/fitness',
		},
	];

	return (
		<>
			<div
				className={`navbar bg-base-100 fixed px-5 z-10 w-screen ${
					hasShadow ? 'shadow-lg' : ''
				}`}
			>
				<div className='navbar-start'>
					<Logo />
				</div>
				<div className='navbar-end'>
					<label
						htmlFor='my-drawer-4'
						className='btn btn-ghost'
						onClick={toggleDrawer}
					>
						<HiMenuAlt3 size={35} />
					</label>
				</div>
				<Drawer
					open={isOpen}
					onClose={toggleDrawer}
					direction='right'
					size={isMobile ? '100%' : '40%'}
					style={{ overflow: 'scroll' }}
				>
					<div className='bg-base-100 pt-3 pb-28'>
						<div className='mx-5 flex justify-between mb-3'>
							<span className='text-xl lg:text-2xl pt-10 font-bold text-gray-400 mt-3'>
								Типы бизнеса
							</span>
							<div
								className='btn btn-ghost btn-circle'
								onClick={toggleDrawer}
							>
								<IoCloseCircleSharp
									size={40}
									className='text-gray-500'
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-3 mx-5'>
							{solutions.map((obj) => (
								<CategoryCard
									key={obj.id}
									title={obj.title}
									icon={obj.icon}
									link={obj.link}
									onClick={toggleDrawer}
								/>
							))}
						</div>

						<div className='mx-5 mt-5 mb-5'>
							<hr className='border-gray-400' />
							<Link
								to='https://online.atikoweb.ru'
								target='_blank'
								className='btn btn-primary btn-block mt-5 normal-case text-lg'
							>
								Войти
							</Link>
						</div>

						<span className='text-xl lg:text-2xl pt-10 font-bold text-gray-400 mt-3 mx-5'>
							Контакты
						</span>
						<div className='grid grid-cols-3 gap-3 mx-5 mt-3 mb-5'>
							<a
								className='btn btn-lg normal-case relative'
								href='tel:+77086001010'
							>
								<FaPhoneAlt className='text-4xl' />
							</a>
							<a
								className='btn btn-lg normal-case relative text-white bg-green-500 hover:bg-green-600'
								href='https://wa.me/+77086001010?text=Здравствуйте! Хочу задать вопрос об автоматизации'
							>
								<IoLogoWhatsapp className='text-4xl' />
							</a>
							<a
								className='btn btn-lg normal-case text-white relative bg-gradient-to-bl from-fuchsia-500 via-red-600 to-orange-400 hover:from-fuchsia-600 hover:via-red-500 hover:to-orange-500'
								href='https://www.instagram.com/atiko_web/'
							>
								<AiFillInstagram className='text-4xl' />
							</a>
						</div>
						<span className='text-xl lg:text-2xl pt-10 font-bold text-gray-400 mt-3 mx-5'>
							Документы
						</span>
						<div class='max-w-md space-y-3 mx-5 text-lg mt-3'>
							<a
								class='flex btn-link text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400'
								href='/refund.html'
							>
								<FcDocument className='mx-1 text-3xl' /> Политика возврата
							</a>
							<a
								class='flex btn-link text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400'
								href='/privacy-policy.html'
							>
								<FcDocument className='mx-1 text-3xl' /> Политика
								конфиденциальности
							</a>
							<a
								class='flex btn-link text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400'
								href='/dogovor-oferta.html'
							>
								<FcDocument className='mx-1 text-3xl' /> Договор оферты
							</a>
							<a
								class='flex btn-link text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400'
								href='/requisites.html'
							>
								<FcDocument className='mx-1 text-3xl' /> Реквизиты
							</a>
						</div>
					</div>
				</Drawer>
			</div>
		</>
	);
}

export default Navbar;
