'use client';

import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Wrapper from '@/components/Wrapper';

const Home = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mt-16 mb-12'>
			<h1 className='text-xl'>hi there, I&apos;m Cosmin 👋</h1>
			<div className='flex gap-1 items-center text-sm text-zinc-700'>
				<MapPinIcon className='w-4 my-auto' />
				<p>Bucharest, Romania</p>
			</div>
			<p className='text-zinc-400 my-6'>
				I&apos;m a self-taught fullstack developer, perfectionist, and travel enthusiast. I currently freelance
				most of my work, as I gain more experience, while actively looking for a part-time or full-time position
				during my university studies.
			</p>
			<h2 className='my-3 text-3xl font-medium'>Technologies</h2>
			<div className='grid grid-cols-1 gap-4 mt-6'>
				<Wrapper
					title={
						<>
							Frameworks <span className='text-sm text-zinc-700'>/</span> Libraries
						</>
					}
				>
					<>
						<li>Next</li>
						<li>React</li>
						<li>Tailwind</li>
						<li>Framer Motion</li>
						<li>Node.js</li>
						<li>Xata</li>
						<li>OpenAI</li>
					</>
				</Wrapper>
				<Wrapper title={'Languages'}>
					<>
						<li>Typescript</li>
						<li>Rust</li>
						<li>C++</li>
					</>
				</Wrapper>
				<Wrapper title={'Databases'}>
					<>
						<li>MySQL</li>
						<li>PostgreSQL</li>
					</>
				</Wrapper>
				<Wrapper title={'Tools'}>
					<>
						<li>NPM</li>
						<li>VSCode</li>
						<li>Vercel</li>
						<li>Github</li>
					</>
				</Wrapper>
			</div>
			<h2 className='my-9 text-3xl font-medium'>Education</h2>
			<div className='grid grid-cols-1 gap-4 mt-6'>
				<Wrapper title={'Spiru Haret University'}>
					<>
						<li>Engineering & Computer Science</li>
					</>
				</Wrapper>
				<Wrapper title={'Dante Alighieri High School'}>
					<>
						<li>B.Sc Mathematics & Computer Science</li>
					</>
				</Wrapper>
			</div>
		</motion.div>
	);
};

export default Home;
