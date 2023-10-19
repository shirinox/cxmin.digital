import Link from 'next/link';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

type Props = {};

const BlogsLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='max-w-2xl mx-auto'>
			<nav className='mb-12'>
				<Link className='flex w-fit' href={'/'}>
					<Image src={'/avatar.png'} alt='my avatar' width={64} height={64} />
				</Link>
			</nav>
			{children}
		</div>
	);
};

export default BlogsLayout;
