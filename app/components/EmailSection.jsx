import React from 'react';
import GithubIcon from '../../public/github-icon.png';
import LinkedinIcon from '../../public/linkedin-icon.png';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
	return (
		<section className="grid md:grid-cols-2 mb-2 gap-4 relative">
			<div className="z-5">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					I&apos;m currently looking for new opportunities, my inbox is always
					open. Whether you have a question or just want to say hi, I&apos;ll
					try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="github.com">
						<Image src={GithubIcon} alt="github icon" height={50} width={50} />
					</Link>
					<Link href="linkedin.com">
						<Image
							src={LinkedinIcon}
							alt="linkedin icon"
							height={50}
							width={50}
						/>
					</Link>
				</div>
			</div>
			<div>
				<form action="https://formsubmit.co/aknapp124@gmail.com" method="POST">
					<input type="hidden" name="_captcha" value="false" />
					<input
						type="hidden"
						name="_subject"
						value="Someone cantacted you from your portfolio!"
					/>
					<div className="mb-6 flex flex-col lg:flex-row gap-4">
						<div className="w-full">
							<label
								htmlFor="name"
								className="block mb-2 text-sm font-medium text-white">
								Name
							</label>
							<input
								type="name"
								name="name"
								id="email"
								className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
								placeholder="Enter your name."
								required
							/>
						</div>
						<div className="w-full">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-white">
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
								placeholder="Enter your email."
								required
							/>
						</div>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="block mb-2 text-sm font-medium text-white">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
							placeholder="What's on your mind?"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="block mb-2 text-sm font-medium text-white">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
							placeholder="Please tell me it's a job!"
						/>
					</div>
					<div className="mb-6">
						<button
							type="submit"
							className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
							Send message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
