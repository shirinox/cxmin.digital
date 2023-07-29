'use client';

import { motion } from 'framer-motion';
import FooterLink from './FooterLink';

const Footer = () => {
	return (
		<motion.div className='text-zinc-400 my-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<FooterLink text='my projects' href='https://github.com/shirinox' />
		</motion.div>
	);
};

export default Footer;
