'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className="flex lg:flex-col flex-col cursor-default">
				<div className="flex flex-col gap-2 lg:gap-0 items-center justify-around lg:hover:border-b hover:text-neutral-200 lg:border-purple-500">
					<div>
						<li className="font-bold text-lg">Frameworks:</li>
					</div>
					<div className="flex w-full gap-2 items-center font-semibold">
						<li>React</li>
						<li>Vue.js</li>
					</div>
				</div>
				<div className="flex gap-2 lg:gap-0  items-center justify-between lg:hover:border-b hover:text-neutral-200 lg:border-purple-500">
					<div>
						<li className="font-bold text-lg">Languages:</li>
					</div>
					<div className="flex gap-2 items-center font-semibold">
						<li>JavaScript</li>
						<li>Python</li>
					</div>
				</div>
				<div className="flex gap-2 lg:gap-0  items-center justify-between lg:hover:border-b hover:text-neutral-200 lg:border-purple-500">
					<div>
						<li className="font-bold text-lg">Databases:</li>
					</div>
					<div className="flex gap-2 items-center font-semibold">
						<li>PostgreSql</li>
						<li>MySql</li>
						<li>MongoDb</li>
					</div>
				</div>
				<div className="flex gap-2 lg:gap-0  items-center justify-between lg:hover:border-b hover:text-neutral-200 lg:border-purple-500">
					<div>
						<li className="font-bold text-lg">Backend:</li>
					</div>
					<div className="flex gap-2 items-center font-semibold">
						<li>Node.js</li>
						<li>Express</li>
						<li>Django</li>
					</div>
				</div>
				<div className="flex gap-2 lg:gap-0  items-center justify-between  lg:hover:border-b hover:text-neutral-200 lg:border-purple-500">
					<div>
						<li className="font-bold text-lg">AWS:</li>
					</div>
					<div className="flex gap-2 items-center font-semibold">
						<li>Lambda</li>
						<li>EC2</li>
						<li>Amplify</li>
					</div>
				</div>
				<div className="flex gap-2 lg:gap-0  items-center justify-between lg:hover:border-b hover:text-neutral-100 lg:border-purple-500">
					<div>
						<li className="font-bold text-lg">Source Control:</li>
					</div>
					<div className="flex gap-2 items-center font-semibold">
						<li>Github</li>
						<li>Gitlab</li>
					</div>
				</div>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul>
				<li className="placeholder:font-bold text-2xl text-neutral-100">
					South Seattle Community College
				</li>
				<li className="text-lg text-neutral-400">
					Full Stack Web Developer Certificate
				</li>
				<li className="text-lg text-neutral-400">May 2022 - October 2023</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul>
				<li className="text-2xl font-bold">Orem</li>
				<li className="text-lg">Software Engineer</li>
				<li className="text-lg text-neutral-400">Dec 2022 - June 2023</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="lg:text-neutral-400 text-neutral-200 mb-96 overflow-hidden">
			<div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-me-image.png"
					width={500}
					height={500}
					alt="about-image"
					className="w-full lg:w-auto mx-auto lg:mx-0 mb-5 lg:mb-0"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full lg:justify-center">
					<h1 className="text-white mb-4 lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-4xl lg:text-7xl">
							About Me
						</span>
						<br></br>
						<span className="box-border"></span>
					</h1>
					<p className="text-neutral-300 text-lg leading-6 font-semibold">
						I bring to the table a solid foundation as a full-stack developer,
						fueled by a genuine passion for creating engaging and responsive web
						applications. I&apos;ve gained practical experience across a
						spectrum of technologies, including JavaScript, React, Redux,
						Node.js, Express, PostgreSQL, MySQL, HTML, CSS, and Git. I approach
						my work with a strong commitment to continuous learning, always
						eager to expand my knowledge and refine my skills.
					</p>
					<div className="flex flex-row mt-8 text-xl">
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}>
							Education
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('experience')}
							active={tab === 'experience'}>
							Experience
						</TabButton>
					</div>
					<div className="mt-8 z-5">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
