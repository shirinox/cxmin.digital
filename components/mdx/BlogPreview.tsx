import Link from 'next/link';
import { BlogPreviewType } from '@/app/blogs/page';

const BlogPreview = ({ frontmatter, href, minutes }: BlogPreviewType) => {
	return (
		<Link href={href}>
			<div className='p-8 bg-lime-200 ring ring-lime-300 rounded-lg hover:shadow-lg transition'>
				<div className='flex mb-4 items-center justify-between'>
					<div className='flex gap-1'>
						{...frontmatter.tags.map((tag) => (
							<p key={tag} className='px-3 py-1 text-sm bg-lime-50 text-lime-600 rounded-full'>
								{tag}
							</p>
						))}
					</div>

					<p className='text-sm px-3 py-1 bg-lime-50 text-lime-600 rounded-full font-semibold'>
						{minutes} MIN READ
					</p>
				</div>
				<h1 className='text-5xl font-bold text-lime-800'>{frontmatter.title}</h1>
				<p className='my-2 text-lime-700'>{frontmatter.description}</p>
			</div>
		</Link>
	);
};

export default BlogPreview;
