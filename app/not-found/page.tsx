import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='text-center grid items-center justify-center my-24'>
			<h1 className='text-5xl font-bold'>Not Found</h1>
			<p>The blog you&apos;re trying to access doesn&apos;t exist.</p>
			<Link className='block w-fit mx-auto py-2 px-4 bg-lime-300 rounded-full text-lg m-8 ' href='/blogs'>
				Go back to blogs
			</Link>
		</div>
	);
};

export default NotFound;
