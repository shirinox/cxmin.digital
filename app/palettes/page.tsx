import { getProviders } from 'next-auth/react';
import Palette from '@/components/Palette';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import InfoBanner from '@/components/InfoBanner';
import FadeWrapper from '@/components/FadeWrapper';
import { getServerSession } from 'next-auth';
import CommunityPalettes from '@/components/CommunityPalettes';
import SignInButtons from '@/components/SignInButtons';

const PalettePage = async () => {
	const session = await getServerSession();
	const providers = await getProviders();
	return (
		<FadeWrapper>
			{!session && (
				<InfoBanner
					text='If you want to upload your own palette here click the button below in order to log in with
							github.'
				/>
			)}
			<h1 className='font-bold text-4xl'>My palettes</h1>
			<div className='grid grid-cols-1'>
				<Palette
					name='Modern'
					primary='#ffffff'
					secondary='#080808'
					additional_colors={['#e11d48', '#1d4ed8', '#4f46e5']}
				/>
			</div>
			<div className='flex gap-2 mt-8 items-center'>
				<h1 className='font-bold text-4xl '>Community palettes</h1>
				{!session && <SignInButtons providers={providers} />}
				{session && (
					<Link href='/palettes/dashboard' className={`${buttonVariants({ variant: 'ghost' })} ml-auto`}>
						Publish palette
					</Link>
				)}
			</div>
			<CommunityPalettes />
		</FadeWrapper>
	);
};

export default PalettePage;
