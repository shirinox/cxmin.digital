'use client';

import GridCell from '@/components/GridCell';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowBigRightDashIcon, ArrowDownRight, Calendar, CalendarClock, Github, Linkedin } from 'lucide-react';

export default function Home() {
	const [time, setTime] = useState<string>(new Date().toLocaleTimeString('en-GB', { hourCycle: 'h24' }));

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString('en-GB', { hourCycle: 'h24' }));
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<div className='grid grid-cols-4 grid-row-1 max-w-4xl gap-8 mx-auto'>
			<div className='flex flex-col md:flex-row gap-4 items-center col-span-4 md:col-span-3 p-12 md:h48 ring ring-lime-300 rounded-lg bg-lime-200'>
				<Image
					className='rounded-full shadow-lg shadow-lime-300'
					src={'/avatar.png'}
					width={80}
					height={80}
					alt='my avatar'
				/>
				<div className='ml-auto text-center mx-auto md:mr-0 md:text-right'>
					<h1 className='text-2xl md:text-3xl font-bold tracking-tighter text-lime-700'>Tatu Cosmin</h1>
					<p className='text-xl font-medium tracking-tight text-lime-700'>Bucharest, Romania</p>
					<p className='text-lg text-lime-700/90'>
						Student @{' '}
						<Link target='blank' href={'https://misn-b.spiruharet.ro/presentation'} className='underline'>
							USH
						</Link>{' '}
						| Fullstack Developer
					</p>
				</div>
			</div>

			<GridCell className={`bg-sky-200 ring ring-sky-300 rounded-lg relative col-span-2 md:col-span-1`}>
				{<div className='w-8 h-8 bg-yellow-300 ring ring-yellow-200 rounded-full absolute -top-3 -right-3' />}
				<p className='text-3xl font-bold flex flex-col justify-center items-center drop-shadow text-white h-full'>
					{time} <span className='text-lg font-medium'>Bucharest</span>
				</p>
			</GridCell>
			<Link className='col-span-2 md:col-span-1' href={''}>
				<GridCell className='bg-[#333] rounded-lg grid items-center justify-center ring ring-[#333]/50'>
					<Github className='w-12 h-12 text-white fill-white' />
				</GridCell>
			</Link>

			<GridCell className='bg-zinc-200 h-full p-8 md:h-48 ring ring-zinc-300 col-span-full md:col-span-3 rounded-lg'>
				<p className='text-2xl font-semibold mb-4 text-zinc-700'>About me</p>
				<p className='text-zinc-700/90'>
					Hi there, I&apos;m Cosmin! I&apos;m a fullstack developer, perfectionist, and travel enthusiast.
					Balancing my studies while hunting for a part-time or full-time job in the tech world.
				</p>
			</GridCell>
			<Link className='col-span-2 md:col-span-3' target='_blank' href={'https://cal.com/tatucosmin/30min'}>
				<GridCell className='bg-indigo-200 h-full p-8 md:h-48 ring ring-indigo-300 rounded-lg'>
					<p className='text-indigo-700/90 h-full grid items-center justify-center'>
						<div className='text-center'>
							<CalendarClock className='w-12 h-12 mx-auto' />
							<span className='text-xl font-semibold'>Schedule a meeting</span>
						</div>
					</p>
				</GridCell>
			</Link>
			<Link className='col-span-2 md:col-span-1' href={'https://linkedin.com/in/tatucosmin'}>
				<GridCell className='bg-[#0077B5] rounded-lg grid items-center justify-center ring ring-[#0075B5]/50'>
					<Linkedin className='w-12 h-12 text-transparent fill-white' />
				</GridCell>
			</Link>
		</div>
	);
}
