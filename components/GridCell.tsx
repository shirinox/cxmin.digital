import { ReactNode } from 'react';

const GridCell = ({ children, className }: { children: ReactNode; className?: string }) => {
	return <div className={`h-48 p-8 ${className}`}>{children}</div>;
};

export default GridCell;
