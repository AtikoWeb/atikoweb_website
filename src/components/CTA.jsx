import React, { useState } from 'react';
import CallBackForm from './CallBackForm';

function CTA() {
	const [isOpen, setIsOpen] = useState();
	return (
		<>
			<div className='card lg:mx-0 shadow-2xl mt-5'>
				<div className='card-body justify-center items-center flex'>
					<h2 className='card-title text-xl lg:text-3xl'>
						Хотите преодолеть хаос в своей отчетности и заработать больше?
					</h2>

					<div className='card-actions mt-3'>
						<button
							className='btn btn-primary normal-case text-lg lg:text-xl lg:btn-lg font-bold'
							onClick={() => setIsOpen(true)}
						>
							Да! Оставить заявку
						</button>
					</div>
				</div>
			</div>

			<CallBackForm
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	);
}

export default CTA;
