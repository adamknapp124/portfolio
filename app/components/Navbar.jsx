import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../../public/images/logo.png';

const navLinks = [
	{ title: 'Top', path: '/', component: 'HeroSection' },
	{ title: 'About', path: '#about', component: 'AboutSection' },
	{ title: 'Projects', path: '#projects', component: 'ProjectsSection' },
	{ title: 'Connect', path: '#Email', component: 'EmailSection' },
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [topNav, setTopNav] = useState(false);
	const [bottomNav, setBottomNav] = useState(false);
	const navRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setNavbarOpen(false);
				console.log('navRef: ', navRef.current);
			}
		};
		let handleResize = () => {
			if (window.innerWidth > 768) {
				setNavbarOpen(false);
				setBottomNav(false);
				setTopNav(true);
			} else {
				setBottomNav(true);
				setTopNav(false);
			}
		};

		handleResize();

		document.addEventListener('mousedown', handler);
		addEventListener('resize', handleResize);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [topNav, bottomNav]);

	return (
		<>
			{topNav && (
				<nav
					className="fixed top-0 left-0 right-0 z-10 bg-black shadow-lg shadow-purple-950"
					id="dropdown">
					<div className="container m-auto">
						<div className="flex flex-wrap items-center justify-between mx-auto p-8">
							<Link
								href={'/'}
								onClick={() => setNavbarOpen(false)}
								className="text-2xl md:text-5xl text-white font-semibold">
								<Image src={logo} alt="logo" width={50} height={50} />
							</Link>
							<div className="mobile-menu block md:hidden">
								{!navbarOpen ? (
									<button
										onClick={() => setNavbarOpen(true)}
										className="flex items-center px-3 py-2 border rounded border-1-white text-white">
										<Bars3Icon className="h-5 w-5" />
									</button>
								) : (
									<button
										onClick={() => setNavbarOpen(false)}
										className="flex items-center px-3 py-2 border rounded border-1-white text-white">
										<XMarkIcon className="h-5 w-5" />
									</button>
								)}
							</div>
							<div
								className="menu hidden md:block md:w-auto cursor-pointer"
								id="navbar">
								<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
									{navLinks.map((link, index) => (
										<li key={index}>
											<NavLink section={link.component} title={link.title} />
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			)}
			{bottomNav && (
				<div className="fixed w-full justify-center bottom-0 z-40 flex lg:hidden">
					<ul className="flex w-full justify-center bg-black shadow">
						{navLinks.map((link, index) => (
							<li
								key={index}
								className="flex justify-center py-3 w-full cursor-pointer border-neutral-30 bg-purple-950 border border-black ">
								<NavLink section={link.component} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
