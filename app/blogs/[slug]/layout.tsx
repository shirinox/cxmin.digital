import Button from '@/components/ui/Button';
import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const BlogLayout = ({ children }: PropsWithChildren) => {
	return (
		<div>
			<Link href={'/blogs'}>
				<Button className='flex gap-2 items-center text-lime-700 my-6'>
					<ArrowLeftCircle className='w-5 h-5' />
					<span className='text-2xl font-medium'>Back to blogs</span>
				</Button>
			</Link>
			{children}
		</div>
	);
};

export default BlogLayout;
