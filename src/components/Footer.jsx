import React from 'react';
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

function Footer() {
	return (
		<footer className='footer footer-center p-10 bg-base-100'>
			<div>
				<span className='text-2xl font-bold '>Мы в соц сетях</span>
			</div>
			<div>
				<div className='grid grid-flow-col gap-4 -mt-5'>
					<a>
						<AiFillYoutube
							size={40}
							className='text-red-500'
						/>
					</a>
					<a>
						<AiFillInstagram
							size={40}
							className='text-rose-500'
						/>
					</a>
					<a>
						<a>
							<AiFillFacebook
								size={40}
								className='text-blue-500'
							/>
						</a>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
