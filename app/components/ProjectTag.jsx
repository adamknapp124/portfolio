import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? 'text-white border-purple-500'
		: 'text-[#ADB7BE] border-blue-400 hover:scale-105';

	return (
		<button
			onClick={() => onClick(name)}
			className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer  hover:scale-105 ${buttonStyles}`}>
			{name}
		</button>
	);
};

export default ProjectTag;
