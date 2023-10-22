'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
	{
		id: 1,
		title: 'Next.js Portfolio',
		description:
			'Portfolio website that showcases myself during my journey as a developer!',
		image: '/images/portfolio-image.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/adamknapp124/portfolio',
		previewUrl: 'https://portfolio-lilac-three-60.vercel.app/',
	},
	{
		id: 2,
		title: 'Real-estate Website',
		description: 'Website for Orem',
		image: '/images/orem-image.png',
		tag: ['All', 'Web'],
		gitUrl: 'https://gitlab.com/orem-web/mvp',
		previewUrl: 'www.orem.tech',
	},
	// {
	// 	id: 3,
	// 	title: 'E-commerce Application',
	// 	description: 'Project 3 description',
	// 	image: '/images/projects/3.png',
	// 	tag: ['All', 'Web'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
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
		<>
			<div className="mb-96">
				<div className=" gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
					<h2>My Projects</h2>
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
		</>
	);
};

export default ProjectsSection;
