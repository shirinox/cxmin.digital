'use client';

import { motion } from 'framer-motion';
import NavLink from './NavLink';
import { ArrowDownOnSquareIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const Navbar = () => {
	const session = useSession();
	console.log(session);
	return (
		<motion.nav initial={{ translateY: -100 }} animate={{ translateY: 0 }} className='my-8'>
			<ul className='flex gap-3 items-center'>
				<NavLink path='/' text='home' href='/' />
				<NavLink path='/palettes' text='palettes' href='/palettes' />
				<NavLink
					path='/cv'
					text='cv'
					href='https://data.shirinox.me/s/B5sKpSekNxTAESP/download'
					icon={<ArrowDownOnSquareIcon className='w-4' />}
				/>
				{session.data?.user && (
					<div className='ml-auto flex'>
						<Avatar>
							<AvatarImage
								src={session.data?.user?.image!}
								className='w-8 h-8 rounded-full border-2 border-zinc-800'
							/>
							<AvatarFallback className='w-8 h-8 rounded-full border-2 px-1.5 border-zinc-800'>
								{session.data?.user?.name?.charAt(0)}
							</AvatarFallback>
						</Avatar>
						<ArrowRightOnRectangleIcon
							onClick={() => signOut()}
							className='w-5 ml-2 text-zinc-600 cursor-pointer'
						/>
					</div>
				)}
			</ul>
		</motion.nav>
	);
};

export default Navbar;
