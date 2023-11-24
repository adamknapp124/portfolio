import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Footer = () => {
	return (
		<footer className="footer border border-l-transparent border-r-transparent border-neutral-600 text-white font-semibold mt-20 w-full">
			<div className=" p-4 flex justify-center">
				<p className="text-[#ADB7BE]">All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
