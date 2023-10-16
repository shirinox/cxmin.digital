import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'cxmin.digital',
	description: 'Personal website of Tatu Cosmin, a fullstack developer from Bucharest, Romania.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={dm_sans.className}>
				<div className='justify-center m-8'>{children}</div>
			</body>
		</html>
	);
}
