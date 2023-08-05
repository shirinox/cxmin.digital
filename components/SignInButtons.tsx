'use client';

import { BuiltInProviderType } from 'next-auth/providers/index';
import { Button, buttonVariants } from './ui/button';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';

const SignInButtons = ({
	providers,
}: {
	providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}) => {
	return (
		<>
			{Object.values(providers!).map((provider) => (
				<Button
					className={`${buttonVariants({ variant: 'white' })} ml-auto`}
					onClick={() => signIn(provider.id)}
				>
					Sign in with {provider.name}
				</Button>
			))}
		</>
	);
};

export default SignInButtons;
