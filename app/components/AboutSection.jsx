'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul>
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>MySQL</li>
				<li>JavaScript</li>
				<li>React</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul>
				<li>Full Stack Web Developer</li>
				<li>South Seattle Community College</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul>
				<li>Full Stack Web Developer</li>
				<li>Orem</li>
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
		<section className="text-white mb-96 mb-2">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-me-image.png"
					width={500}
					height={500}
					alt="about-image"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-[#ADB7BE] ms:text-lg">
						I bring to the table a solid foundation as a full-stack developer,
						fueled by a genuine passion for creating engaging and responsive web
						applications. I&apos;ve gained practical experience across a
						spectrum of technologies, including JavaScript, React, Redux,
						Node.js, Express, PostgreSQL, MySQL, HTML, CSS, and Git. I approach
						my work with a strong commitment to continuous learning, always
						eager to expand my knowledge and refine my skills.
					</p>
					<div className="flex flex-row mt-8">
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}>
							Education
						</TabButton>{' '}
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
