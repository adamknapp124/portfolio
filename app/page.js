'use client';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

export default function Home() {
	return (
		<main className="md:mt-24 flex min-h-screen flex-col items-center hero-background mx-auto px-12 py-12">
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
			<Element name="EmailSection">
				<EmailSection />
			</Element>
			<Footer />
		</main>
	);
}
