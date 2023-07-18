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
				>
					<div className='bg-base-100 h-screen pt-3'>
						<div className='mx-5 flex justify-between mb-3'>
							<span className='text-xl lg:text-2xl pt-10 font-bold text-gray-400 mt-3'>
								Типы бизнеса
							</span>
							<div
								className='absolute right-2 top-2 btn btn-ghost btn-circle'
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

						<div className='mx-5 mt-5'>
							<hr className='border-gray-400' />
							<Link
								to='https://online.atikoweb.ru'
								target='_blank'
								className='btn btn-primary btn-block mt-5 normal-case text-lg'
							>
								Войти
							</Link>
						</div>
					</div>
				</Drawer>
			</div>
		</>
	);
}

export default Navbar;
