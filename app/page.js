'use client';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import { Element } from 'react-scroll';

export default function Home() {
	return (
		<main className="mt-24 flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-12">
			<Navbar />
			<Element name="HeroSection">
				<HeroSection />
			</Element>
			<Element name="AboutSection">
				<AboutSection />
			</Element>
			<Element name="ProjectsSection">
				<ProjectsSection />
			</Element>
		</main>
	);
}
