'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const FadeWrapper = ({ children }: PropsWithChildren) => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			{children}
		</motion.div>
	);
};

export default FadeWrapper;
