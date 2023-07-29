import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const dm_sans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'cxmin.digital | fullstack developer',
	description: 'cxmin.digital is my personal website and portfolio, where I showcase my projects and skills.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={dm_sans.className}>
				<div className='mx-auto max-w-2xl text-white'>
					<div className='mx-8'>
						<Navbar />
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
