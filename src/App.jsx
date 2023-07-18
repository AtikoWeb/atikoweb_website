import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Restaurant from './screens/Solutions/Restaurant';
import Fitness from './screens/Solutions/Fitness';
import Fastfood from './screens/Solutions/Fastfood';
import { useEffect } from 'react';
import Accordion from './components/Accordion';
import CTA from './components/CTA';
import Grocery from './screens/Solutions/Grocery';
import CoffeeHouse from './screens/Solutions/CoffeeHouse';
import Bar from './screens/Solutions/Bar';
import ClothesBoutique from './screens/Solutions/ClothesBoutique';
import MakeUpBoutique from './screens/Solutions/MakeUpBoutique';

function App() {
	const { pathname } = useLocation();
	const handlePageChange = (page) => {
		dispatch(setCurrentPage(page));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Navbar />
			<AnimatePresence
				mode='wait'
				onExitComplete={() => handlePageChange(null)}
			>
				<Routes>
					<Route
						key={'Home'}
						path='/'
						element={
							<motion.div
								key='Home'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Home />
							</motion.div>
						}
					/>
					<Route
						key={'Restaurant'}
						path='/restaurant & cafe'
						element={
							<motion.div
								key='Restaurant'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Restaurant />
							</motion.div>
						}
					/>
					<Route
						key={'Fitness'}
						path='/fitness'
						element={
							<motion.div
								key='Fitness'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Fitness />
							</motion.div>
						}
					/>
					<Route
						key={'Fastfood'}
						path='/fastfood'
						element={
							<motion.div
								key='Fastfood'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Fastfood />
							</motion.div>
						}
					/>
					<Route
						key={'Grocery'}
						path='/grocery'
						element={
							<motion.div
								key='Grocery'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Grocery />
							</motion.div>
						}
					/>
					<Route
						key={'CoffeeHouse'}
						path='/coffeee-house'
						element={
							<motion.div
								key='CoffeeHouse'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<CoffeeHouse />
							</motion.div>
						}
					/>
					<Route
						key={'Bar'}
						path='/bar'
						element={
							<motion.div
								key='Bar'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Bar />
							</motion.div>
						}
					/>
					<Route
						key={'ClothesBoutique'}
						path='/clothes-boutique'
						element={
							<motion.div
								key='ClothesBoutique'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<ClothesBoutique />
							</motion.div>
						}
					/>
					<Route
						key={'MakeUpBoutique'}
						path='/makeup-boutique'
						element={
							<motion.div
								key='MakeUpBoutique'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<MakeUpBoutique />
							</motion.div>
						}
					/>
				</Routes>
				<div className='mx-5 mb-10'>
					<Accordion />
				</div>
				<CTA />
				<Footer />
			</AnimatePresence>
		</>
	);
}

export default App;
