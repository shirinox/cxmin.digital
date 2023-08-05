import { InformationCircleIcon } from '@heroicons/react/24/solid';

const InfoBanner = ({ text }: { text: string }) => {
	return (
		<div className='flex w-full p-4 items-center bg-blue-600/10 rounded border border-blue-600 my-6'>
			<InformationCircleIcon className='w-8 mr-3 text-blue-400' />
			<p className='text-blue-400 text-sm'>{text}</p>
		</div>
	);
};

export default InfoBanner;
