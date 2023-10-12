import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
	{
		id: 1,
		title: 'React Portfolio Website',
		description: 'Project 1 description',
		image: '/images/projects/1.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 2,
		title: 'Potography Portfolio Website',
		description: 'Project 2 description',
		image: '/images/projects/2.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 3,
		title: 'E-commerce Application',
		description: 'Project 3 description',
		image: '/images/projects/3.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 4,
		title: 'Food Ordering Application',
		description: 'Project 4 description',
		image: '/images/projects/4.png',
		tag: ['All', 'Mobile'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 5,
		title: 'React Firebase Template',
		description: 'Authentication and CRUD operations',
		image: '/images/projects/5.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 6,
		title: 'Full-stack Roadmap',
		description: 'Project 5 description',
		image: '/images/projects/6.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
];

const ProjectsSection = () => {
	return (
		<>
			<h2>My Projects</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<button className="rounded-full border-2 border-purple-500 hover:border-blue-400  px-6 py-3 text-xl cursor-pointer">
					All
				</button>
				<button className="rounded-full border-2 border-purple-500 hover:border-blue-400 px-6 py-3 text-xl cursor-pointer">
					Web
				</button>
				<button className="rounded-full border-2 border-purple-500 hover:border-blue-400  px-6 py-3 text-xl cursor-pointer">
					Mobile
				</button>
			</div>
			<div>
				{projectsData.map((project) => (
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
		</>
	);
};

export default ProjectsSection;
