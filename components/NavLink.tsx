'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
	path: string;
	href: string;
	text: string;
	icon?: React.ReactNode;
};

const NavLink = ({ path, href, text, icon }: NavLinkProps) => {
	const current_path = usePathname();
	const is_active = current_path == path;
	return (
		<li
			className={`text-zinc-500 lowercase underline-offset-2 ${
				is_active ? 'underline text-[#fff] decoration-zinc-500' : null
			}`}
		>
			<Link className='flex gap-1' href={href}>
				{text}
				{icon}
			</Link>
		</li>
	);
};

export default NavLink;
