import { getXataClient } from '@/app/xata/xata';
import Palette from './Palette';

const CommunityPalettes = async () => {
	const xata = getXataClient();
	const palettes = await xata.db.palettes.getAll();
	return (
		<div>
			{palettes.map(
				(palette) =>
					palette.is_published && (
						<Palette
							name={palette.name!}
							primary={palette.primary!}
							secondary={palette.secondary!}
							additional_colors={palette.additional_colors!}
							created_by={palette.created_by!}
						/>
					)
			)}
		</div>
	);
};

export default CommunityPalettes;
