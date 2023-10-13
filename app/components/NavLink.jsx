import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ section, title }) => {
	return (
		<Link
			to={section}
			smooth={true}
			duration={500}
			offset={-150}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded-md:p-0 hover:text-white">
			{title}
		</Link>
	);
};

export default NavLink;
