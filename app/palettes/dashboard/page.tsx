'use client';

import { useState } from 'react';

import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

import { ArrowPathIcon } from '@heroicons/react/24/solid';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Palette from '@/components/Palette';
import InfoBanner from '@/components/InfoBanner';
import FadeWrapper from '@/components/FadeWrapper';
import { useToast } from '@/components/ui/use-toast';

export const revalidate = 60;

const PaletteDashboard = () => {
	const [primary, setPrimary] = useState<string>('#ffffff');
	const [secondary, setSecondary] = useState<string>('#000000');
	const [additionalColors, setAdditionalColors] = useState<string[]>([]);
	const [paletteName, setPaletteName] = useState<string>('Your palette name');

	const router = useRouter();

	const { toast } = useToast();

	const { data, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/palettes');
		},
	});

	if (status === 'loading')
		return (
			<FadeWrapper>
				<ArrowPathIcon className='w-32 animate-spin mx-auto' />
			</FadeWrapper>
		);

	return (
		<FadeWrapper>
			<InfoBanner text='This page is still a work in progress. You can add suggestions by opening an issue in the github repository.' />
			<h1 className='text-4xl font-bold'>Palette Creator</h1>
			<div className='mt-4'>
				<label className='text-sm'>Palette name</label>
				<Input
					onChange={(e) => setPaletteName(e.target.value)}
					type='text'
					className='bg-zinc-900 focus-visible:ring-blue-600'
					placeholder={paletteName}
				/>
				<div className='flex gap-4 mt-4'>
					<Input
						className='h-12 p-0'
						value={primary}
						onChange={(e) => setPrimary(e.target.value)}
						type='color'
					/>
					<Input
						className='h-12 p-0'
						value={secondary}
						onChange={(e) => setSecondary(e.target.value)}
						type='color'
					/>
				</div>
				<div className='flex gap-3 mt-2'>
					{additionalColors.map((color, i) => (
						<Input
							key={i}
							className='h-12 p-0'
							value={color}
							onChange={(e) => {
								let newColors = [...additionalColors];
								newColors[i] = e.target.value;
								setAdditionalColors([...newColors]);
							}}
							type='color'
						/>
					))}
				</div>

				{additionalColors.length !== 6 && (
					<div
						onClick={() => {
							additionalColors.length < 6 && setAdditionalColors([...additionalColors, '#ffffff']);
						}}
						className='flex text-zinc-300 items-center justify-center h-12 mt-2 w-full border rounded border-dashed border-zinc-800 cursor-pointer select-none'
					>
						+ Add an additional color
					</div>
				)}
				<Button
					onClick={async () => {
						await fetch('/api/palettes/add', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								palette: {
									primary,
									secondary,
									additional_colors: additionalColors,
									name: paletteName,
									created_by: data.user?.email,
									is_published: false,
								},
							}),
						});
						toast({
							variant: 'success',
							title: 'Palette sent!',
							description: 'Your palette has been sent for review before being published.',
						});
						router.push('/palettes');
						router.refresh();
					}}
					className='w-full mt-2'
					variant={'white'}
				>
					Publish palette
				</Button>
			</div>
			<h2 className='text-3xl font-bold mt-10'>Preview Palette</h2>
			<Palette
				primary={primary}
				secondary={secondary}
				name={paletteName}
				additional_colors={...additionalColors}
				created_by={data.user?.name!}
			/>
		</FadeWrapper>
	);
};

export default PaletteDashboard;
