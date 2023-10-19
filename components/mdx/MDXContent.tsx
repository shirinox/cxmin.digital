'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PropsWithChildren, ReactNode } from 'react';

type MdxContentProps = {
	source: MDXRemoteSerializeResult;
};
const MdxComponents = {
	h1: ({ children }: PropsWithChildren) => <h1 className='text-5xl my-5 font-semibold'>{children}</h1>,
	h2: ({ children }: PropsWithChildren) => <h2 className='text-4xl my-4 font-semibold'>{children}</h2>,
	h3: ({ children }: PropsWithChildren) => <h3 className='text-3xl my-3 font-semibold'>{children}</h3>,
	h4: ({ children }: PropsWithChildren) => <h4 className='text-2xl my-2 font-semibold'>{children}</h4>,
	ul: ({ children }: PropsWithChildren) => <ul className='ml-6'>{children}</ul>,
	li: ({ children }: PropsWithChildren) => <li className='list-disc'>{children}</li>,
	p: ({ children }: PropsWithChildren) => <p className='my-2'>{children}</p>,
	a: ({ children, href }: { children: ReactNode; href: string }) => (
		<a className='text-lime-700 underline font-medium hover:text-lime-800' href={href}>
			{children}
		</a>
	),
	b: ({ children }: PropsWithChildren) => <b className='font-semibold'>{children}</b>,
	pre: ({ children }: PropsWithChildren) => (
		<pre className='bg-lime-100 text-lime-700 p-4 my-6 rounded-lg w-full'>{children}</pre>
	),
	code: ({ children }: PropsWithChildren) => <code className='text-sm break-words'>{children}</code>,
};

export function MDXContent({ source }: MdxContentProps) {
	return <MDXRemote {...source} components={MdxComponents} />;
}
