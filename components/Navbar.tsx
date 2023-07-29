'use client';

import { motion } from 'framer-motion';
import NavLink from './NavLink';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
	return (
		<motion.nav initial={{ translateY: -100 }} animate={{ translateY: 0 }} className='my-10'>
			<ul className='flex gap-3'>
				<NavLink path='/' text='home' href='/' />
				<NavLink
					path='/cv'
					text='cv'
					href='https://data.shirinox.me/s/B5sKpSekNxTAESP/download'
					icon={<ArrowDownOnSquareIcon className='w-4' />}
				/>
			</ul>
		</motion.nav>
	);
};

export default Navbar;
