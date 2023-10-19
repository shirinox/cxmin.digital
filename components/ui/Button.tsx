import { PropsWithChildren, ReactNode } from 'react';

const Button = (props: any) => {
	return <button {...props}>{props.children}</button>;
};

export default Button;
