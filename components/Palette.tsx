'use client';
import { motion } from 'framer-motion';
import { invertColor } from '@/app/utils/utils';

export type PaletteProps = {
	name: string;
	primary: string;
	secondary: string;
	additional_colors?: string[];
	created_by?: string;
};

const Palette = ({ name, primary, secondary, additional_colors, created_by }: PaletteProps) => {
	return (
		<motion.div className='my-6'>
			<h3 className='font-medium text-xl'>{name}</h3>
			{created_by && <p className='text-xs text-zinc-700'>Created by {created_by}</p>}
			<div className='flex gap-3 mt-3'>
				<div className='w-full'>
					<p className='text-xs mb-1'>Primary</p>
					<motion.div
						style={{ background: primary }}
						className={`h-16 w-full rounded flex items-center justify-center cursor-pointer`}
					>
						<p
							onClick={() => navigator.clipboard.writeText(primary)}
							style={{ color: invertColor(primary) }}
						>
							{primary}
						</p>
					</motion.div>
				</div>

				<div className='w-full'>
					<p className='text-xs mb-1'>Secondary</p>
					<motion.div
						style={{ background: secondary }}
						className={`h-16 w-full rounded flex items-center justify-center cursor-pointer`}
					>
						<p
							onClick={() => navigator.clipboard.writeText(secondary)}
							style={{ color: invertColor(secondary) }}
						>
							{secondary}
						</p>
					</motion.div>
				</div>
			</div>
			{additional_colors && (
				<div className='mt-4'>
					{additional_colors.length > 0 && <h3 className='mb-3 font-medium text-md'>Additional colors</h3>}
					<div className='grid grid-cols-3 mt-3 gap-3'>
						{additional_colors.map((color, i) => (
							<div
								key={i}
								className='w-full h-16 rounded flex items-center justify-center cursor-pointer'
								style={{ background: color }}
							>
								<p
									onClick={() => navigator.clipboard.writeText(color)}
									style={{ color: invertColor(color) }}
								>
									{color}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Palette;
