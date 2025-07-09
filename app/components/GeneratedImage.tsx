import Image from 'next/image';
import { GeneratedImageProps } from '../types';

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
	return (
		<div className='mt-8'>
			<div className='relative aspect-square w-full overflow-hidden rounded-lg'>
				<Image
					width={0}
					height={0}
					sizes='100vw'
					src={imageUrl}
					alt='Generated artwork'
					className='object-cover w-full h-full '
				/>
			</div>
		</div>
	);
}
