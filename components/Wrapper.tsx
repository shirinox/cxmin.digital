import React from 'react';

type Props = {
	title: React.ReactNode | string;
	children: React.ReactNode;
};

const TechnologiesWrapper = ({ title, children }: Props) => {
	return (
		<div className='ml-3'>
			<h3 className='text-xl text-zinc-300'>{title}</h3>
			<ul className='text-zinc-500 flex gap-4'>{children}</ul>
		</div>
	);
};

export default TechnologiesWrapper;
