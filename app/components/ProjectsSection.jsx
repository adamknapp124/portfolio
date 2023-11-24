'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
	{
		id: 1,
		title: 'Real Time Messenger',
		description:
			'Messenger application built in Next.js, using next-auth, pusher, prisma, mongo db, and hosted on Vercel',
		image: '/images/messenger-app.png',
		tag: ['All', 'Web', 'Mobile'],
		gitUrl: 'https://github.com/adamknapp124/messenger-app',
		previewUrl: 'https://messenger-app-sigma.vercel.app/',
	},
	{
		id: 2,
		title: 'Next.js Portfolio',
		description:
			'Portfolio website that showcases myself during my journey as a developer!',
		image: '/images/portfolio-image.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/adamknapp124/portfolio',
		previewUrl: 'https://portfolio-lilac-three-60.vercel.app/',
	},
	{
		id: 3,
		title: 'Real-estate Website',
		description: 'Website for Orem',
		image: '/images/orem-image.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://gitlab.com/orem-web/mvp',
		previewUrl: 'https://www.orem.tech',
	},
	// {
	// 	id: 4,
	// 	title: 'Food Ordering Application',
	// 	description: 'Project 4 description',
	// 	image: '/images/projects/4.png',
	// 	tag: ['All', 'Mobile'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
	// {
	// 	id: 5,
	// 	title: 'React Firebase Template',
	// 	description: 'Authentication and CRUD operations',
	// 	image: '/images/projects/5.png',
	// 	tag: ['All', 'Web'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
	// {
	// 	id: 6,
	// 	title: 'Full-stack Roadmap',
	// 	description: 'Project 5 description',
	// 	image: '/images/projects/6.png',
	// 	tag: ['All', 'Web'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<div className="md:h-screen container">
			<h1 className="text-white lg:leading-normal font-extrabold text-center">
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-6xl lg:text-7xl">
					Projects
				</span>
				<br></br>
				<span className="box-border"></span>
			</h1>

			<div className="min-h-screen">
				<div className=" gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
					<div className="text-white flex flex-row justify-center items-center gap-2 my-6">
						<ProjectTag
							onClick={handleTagChange}
							name="All"
							isSelected={tag === 'All'}
						/>
						<ProjectTag
							onClick={handleTagChange}
							name="Web"
							isSelected={tag === 'Web'}
						/>
						<ProjectTag
							onClick={handleTagChange}
							name="Mobile"
							isSelected={tag === 'Mobile'}
						/>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
						{filteredProjects.map((project) => (
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								imgUrl={project.image}
								gitUrl={project.gitUrl}
								previewUrl={project.previewUrl}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
