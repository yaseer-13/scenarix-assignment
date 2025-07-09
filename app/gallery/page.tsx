'use client';

import Image from 'next/image';
import { createClient } from 'pexels';
import { useEffect, useState } from 'react';

interface Photo {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	photographer: string;
	photographerUrl: string;
}

export default function Gallery() {
	const [photos, setPhotos] = useState<Photo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || '');
				const response = await client.photos.search({
					query: 'ai generated art',
					per_page: 80,
				});

				if ('error' in response) {
					throw new Error(response.error);
				}

				const formattedPhotos = response.photos.map((photo) => ({
					id: photo.id,
					title: photo.alt || 'Untitled',
					description: photo.alt || 'No description available',
					image: photo.src.large2x,
					tags: ['Abstract', 'Digital', 'Art'],
					photographer: photo.photographer,
					photographerUrl: photo.photographer_url,
				}));

				setPhotos(formattedPhotos);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			} finally {
				setLoading(false);
			}
		};

		fetchPhotos();
	}, []);

	if (loading) {
		return (
			<div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
				<div className='text-center'>
					<div className='animate-spin h-12 w-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto'></div>
					<p className='mt-4 text-gray-600 dark:text-gray-300'>Loading gallery...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
				<div className='text-center'>
					<p className='text-red-500 mb-4'>Error: {error}</p>
					<button
						onClick={() => window.location.reload()}
						className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'
					>
						Try Again
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12'>
			<div className='max-w-7xl mx-auto px-4'>
				<h1 className='text-4xl font-bold text-center text-gray-900 dark:text-white mb-4'>
					Gallery
				</h1>
				<p className='text-center text-gray-600 dark:text-gray-300 mb-12'>
					Explore our curated collection of AI-generated art.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{photos.map((photo) => (
						<div
							key={photo.id}
							className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition'
						>
							<div className='relative w-full aspect-square'>
								<Image
									src={photo.image}
									alt={photo.title}
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
							</div>
							<div className='p-5'>
								<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
									{photo.title}
								</h3>
								<p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>{photo.description}</p>
								<a
									href={photo.photographerUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='text-sm text-purple-600 hover:underline'
								>
									By {photo.photographer}
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
