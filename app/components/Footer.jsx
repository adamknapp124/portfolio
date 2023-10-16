import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Footer = () => {
	return (
		<footer className="footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
				<span>
					{/* <Image src={logo} alt="logo" width={50} height={50} /> */}
				</span>
				<p className="text-[#ADB7BE]">All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
