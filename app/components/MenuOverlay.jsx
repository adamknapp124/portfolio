import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
	return (
		<ul className="flex flex-col py-4 items-center z-15">
			{links.map((link, index) => (
				<li key={index}>
					<NavLink key={index} href={link.path} title={link.title} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
