import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
	return (
		<section>
			<div className='text-center text-4xl lg:text-5xl mt-20 mb-10 font-black'>
				<span>Контакты</span>
			</div>
			<section>
				<div class='mx-auto max-w-screen-xl'>
					<div class='flex justify-center items-center text-gray-500'>
						<a
							className='btn btn-lg w-24 h-20 rounded-xl md:w-36 md:h-32 mx-3 md:mx-5'
							href='tel:+77086001010'
						>
							<FaPhoneAlt className='text-4xl md:text-5xl' />
						</a>
						<a
							className='btn btn-lg w-24 h-20 md:w-36 md:h-32 bg-green-500 hover:bg-green-600 rounded-xl mx-3 md:mx-5'
							href='https://wa.me/+77086001010?text=Здравствуйте! Хочу задать вопрос об автоматизации'
						>
							<IoLogoWhatsapp className='text-4xl md:text-6xl text-base-100' />
						</a>
						<a
							className='btn btn-lg w-24 h-20 md:w-36 md:h-32 bg-gradient-to-bl from-fuchsia-500 via-red-600 to-orange-400 hover:from-fuchsia-600 hover:via-red-500 hover:to-orange-500 rounded-xl mx-3 md:mx-5'
							href='https://www.instagram.com/atiko_web/'
						>
							<AiFillInstagram className='text-4xl md:text-6xl text-white' />
						</a>
					</div>
				</div>
			</section>

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.908716938562!2d76.92060601165777!3d43.232373479426506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369546ff87397%3A0x88f6f626eb8a19d7!2sAtikoWeb!5e0!3m2!1sru!2skz!4v1690374899794!5m2!1sru!2skz'
				width='600'
				height='450'
				className='mx-auto w-full mt-14'
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			/>
			<div className='p-10 text-center'>
				<span class='text-2xl text-gray-400 dark:text-gray-500 font-bold'>
					© 2023 AtikoWeb
				</span>
			</div>
		</section>
	);
}

export default Footer;
