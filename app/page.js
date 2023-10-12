import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

export default function Home() {
	return (
		<main className="mt-24 flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-12">
			<Navbar />
			<HeroSection />
		</main>
	);
}
