import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ title, icon, link, onClick }) {
	return (
		<>
			<Link
				className='btn btn-lg normal-case relative'
				to={link}
				onClick={onClick}
			>
				<div className='flex items-center justify-around'>
					<span className='text-primary absolute left-3'>{icon}</span>
					<h2 className='text-sm font-semibold lg:text-lg ml-3'>{title}</h2>
				</div>
			</Link>
		</>
	);
}

export default CategoryCard;
