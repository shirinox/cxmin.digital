'use client';

import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

const Home = async () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mt-16 mb-12'>
			<h1 className='text-xl'>hi there, I'm Cosmin 👋</h1>
			<div className='flex gap-1 items-center text-sm text-zinc-700'>
				<MapPinIcon className='w-4 my-auto' />
				<p>Bucharest, Romania</p>
			</div>
			<p className='text-zinc-400 mt-6'>
				I'm a self-taught fullstack developer, perfectionist, and travel enthusiast. I currently freelance most
				of my work, as I gain more experience, while actively looking for a part-time position during my
				university studies.
			</p>
		</motion.div>
	);
};

export default Home;
