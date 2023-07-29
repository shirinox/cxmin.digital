'use client';

import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { animate, motion } from 'framer-motion';
import Link from 'next/link';
type FooterLinkProps = {
	href: string;
	text: string;
};

const FooterLink = ({ href, text }: FooterLinkProps) => {
	return (
		<motion.div
			className='w-fit'
			initial={{ backgroundColor: 'transparent', backgroundPositionX: -1000 }}
			whileHover={{
				backgroundColor: 'white',
				backgroundPositionX: 0,
				transition: { duration: 1 },
			}}
		>
			<Link
				href={href}
				className='flex hover:text-[#101010] text-zinc-300 text-sm items-center gap-1 cursor-pointer'
			>
				<ArrowUpRightIcon className='w-3' />
				<p>{text}</p>
			</Link>
		</motion.div>
	);
};

export default FooterLink;
