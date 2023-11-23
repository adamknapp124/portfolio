import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, closeNavbar }) => {
	const handleLinkClick = () => {
		// Close the navbar when a link is clicked
		closeNavbar();
	};

	return (
		<ul className="flex flex-col py-4 items-center z-15">
			{links.map((link, index) => (
				<li
					key={index}
					className="cursor-pointer hover:bg-neutral-800 hover:font-semibold w-11/12 rounded-md text-center"
					onClick={handleLinkClick}>
					<NavLink key={index} section={link.component} title={link.title} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
