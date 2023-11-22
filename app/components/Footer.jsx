import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Footer = () => {
	return (
		<footer className="footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white mt-20">
			<div className="container p-4 flex justify-center">
				<p className="text-[#ADB7BE]">All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
