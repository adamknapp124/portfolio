import React from 'react';
import GithubIcon from '../../public/github-icon.png';
import LinkedInIcon from '../../public/linkedin-icon.png';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
	return (
		<section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap=4">
			<div>
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[ADB7BE] mb-4 max-w-md">
					I am currently looking for new opportunities, my inbox is always open.
					Whether you have a question or just want to say hi, I&apos;ll try my
					best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="github.com">
						<Image src={GithubIcon} alt="Github icon" />
					</Link>
					<Link href="linkedin.com">
						<Image src={LinkedInIcon} alt="Linkedin icon" />
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col">
					<div className="mb-6">
						<label
							htmlFor="email"
							type="email"
							className="text-white block mb-2 text-sm font-medium">
							Your Email
						</label>
						<input
							type="email"
							id="email"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="youremail@yourdomain.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							type="text"
							className="text-white block text-sm mb-2 font-medium">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Just saying hi"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Leave your message here..."
						/>
					</div>
					<button
						type="submit"
						className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
