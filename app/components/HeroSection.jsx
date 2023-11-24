'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// import Link from 'next/link';
import { Link } from 'react-scroll';

const HeroSection = (section) => {
	const scrollToBottom = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth', // Adds a smooth scroll effect
		});
	};

	return (
		<section className="md:mt-52 min-h-screen">
			<div className="flex xl:flex-row flex-col-reverse">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl xs:text-5xl md:text-7xl lg:text-7xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
							Hello, I&apos;m{' '}
						</span>
						<br></br>
						<span className="box-border">
							<TypeAnimation
								sequence={['Adam', 1000, 'Web Developer', 1000]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
							/>
						</span>
					</h1>
					<p className="text-neutral-300 text-lg leading-6 font-semibold mb-4">
						I bring imaginative concepts to life through interactive digital
						experiences.
					</p>
					<div className="">
						<button
							onClick={scrollToBottom}
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-blue-400 hover:scale-110 text-white cursor-pointer font-semibold">
							Connect with me
						</button>
						<a
							href="/Adam_Knapp_Resume.pdf"
							download="Adam_Knapp_Resume.pdf"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-blue-400 hover:scale-110 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="place-self-center mt-4 lg:mt-0">
					<div
						className="rounded-full w-[250] h-[50] mb-6 md:mb-0"
						style={{ width: '100%', height: '100%' }}>
						<Image
							src="/images/hero-image.png"
							alt="hero image"
							priority
							width={400}
							height={400}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
