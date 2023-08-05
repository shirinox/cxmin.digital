import { getXataClient } from '@/app/xata/xata';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/app/utils/auth';
import { PaletteProps } from '@/components/Palette';

export const POST = async (req: NextRequest) => {
	const session = await getServerSession(authOptions);
	if (!session) return NextResponse.json({ error: 'Please login before sending a request.' }, { status: 401 });
	const xata = getXataClient();

	const data = await req.json();
	const { palette } = data as { palette: PaletteProps };

	if (palette) {
		await xata.db.palettes.create({
			primary: palette.primary,
			secondary: palette.secondary,
			additional_colors: palette.additional_colors,
			created_by: session.user?.name,
			name: palette.name,
		});
	}
	return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
};

export const GET = async () => {
	return NextResponse.json('GET is not allowed. Sorry. :)');
};
