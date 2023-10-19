import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import BlogPreview from '@/components/mdx/BlogPreview';

const SECONDS_PER_WORD = 0.3;

type Frontmatter = {
	title: string;
	description: string;
	tags: string[];
	date: string;
};

export type BlogPreviewType = {
	frontmatter: Frontmatter;
	href: string;
	minutes: number;
};

const path = `./blogs/`;

const getBlog = async (file: string) => {
	const raw = fs.readFileSync(path + file).toString();
	const serialized = await serialize(raw, { parseFrontmatter: true });
	const frontmatter = serialized.frontmatter as Frontmatter;
	const words = raw.split('\n').splice(6).join('\n').split(' ').length;
	const seconds = Math.ceil(words * SECONDS_PER_WORD);
	const minutes = Math.ceil(seconds / 60);
	return { frontmatter, href: '/blogs/' + file.trim().replace('.mdx', ''), minutes };
};

const BlogsPage = async () => {
	const rawFolder = fs.readdirSync(path);
	const blogs_preview: BlogPreviewType[] = await Promise.all(rawFolder.map(async (file) => await getBlog(file)));

	return (
		<div className='grid gap-4 justify-center mx-auto rounded-lg grid-cols-1'>
			{blogs_preview.map((blog) => {
				return <BlogPreview key={blog.frontmatter.title} {...blog} />;
			})}
		</div>
	);
};

export default BlogsPage;
