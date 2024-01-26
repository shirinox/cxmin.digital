import { ReactNode } from "react";
import { twMerge as tm } from "tailwind-merge";

type GridCellProps = {
  children?: ReactNode;
  className?: string;
};

const GridCell = ({ children, className }: GridCellProps) => {
  return (
    <div className={tm(`h-full w-full rounded-md p-8 ${className}`)}>
      {children}
    </div>
  );
};

export default GridCell;
