'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
	path: string;
	href: string;
	text: string;
};

const NavLink = ({ path, href, text }: NavLinkProps) => {
	const current_path = usePathname();
	const is_active = current_path == path;
	return (
		<li
			className={`text-zinc-500 lowercase underline-offset-4 ${
				is_active ? 'underline text-[#fff] decoration-zinc-500' : null
			}`}
		>
			<Link href={href}>{text}</Link>
		</li>
	);
};

export default NavLink;
