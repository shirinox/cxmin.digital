import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'node:path';
import { redirect } from 'next/navigation';
import { MDXContent } from '@/components/mdx/MDXContent';

export const revalidate = 60; // 60 seconds

type Frontmatter = {
	title: string;
	description: string;
	date: string;
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
	const path = `${process.cwd()}/public/blogs/${params.slug}.mdx`;
	const raw = fs.readFileSync(path).toString();
	const serialized = await serialize(raw, { parseFrontmatter: true });
	const frontmatter = serialized.frontmatter as Frontmatter;
	return (
		<div>
			<h1 className='text-7xl text-lime-800 font-bold'>{frontmatter.title}</h1>
			<div className='my-2 mb-12'>
				<p className='text-lime-700'>{frontmatter.description}</p>
				<p className='text-xs text-lime-700/50'>{frontmatter.date}</p>
			</div>

			<MDXContent source={serialized} />
		</div>
	);
};

export default BlogPage;
