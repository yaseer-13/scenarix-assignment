'use client';

import Link from 'next/link';
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
			console.log('fetching photos with API key', process.env.NEXT_PUBLIC_PEXELS_API_KEY);
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
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 flex items-center justify-center'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-opacity-75 mx-auto'></div>
					<p className='mt-6 text-xl text-gray-600 dark:text-gray-300 font-medium'>
						Loading AI masterpieces...
					</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 flex items-center justify-center'>
				<div className='max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-8 text-center'>
					<div className='text-red-500 mb-6'>
						<svg
							className='mx-auto h-12 w-12'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
							/>
						</svg>
					</div>
					<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2'>
						Oops! Something went wrong
					</h3>
					<p className='text-gray-600 dark:text-gray-300 mb-6'>{error}</p>
					<button
						onClick={() => window.location.reload()}
						className='w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
					>
						Try Again
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h1 className='text-5xl font-bold text-gray-900 dark:text-white mb-6'>AI Art Gallery</h1>
					<p className='max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300'>
						Discover a collection of breathtaking AI-generated artwork that pushes the boundaries of
						creativity
					</p>
					<div className='mt-8 flex justify-center'>
						<div className='h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full'></div>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
					{photos.map((photo) => (
						<div
							key={photo.id}
							className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2'
						>
							<div className='relative h-64 overflow-hidden'>
								<img
									src={photo.image}
									alt={photo.title}
									className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
							</div>
							<div className='p-4'>
								<p className='text-gray-700 dark:text-gray-300 text-sm mb-3'>{photo.description}</p>
								<div className='flex flex-wrap gap-2'>
									{photo.tags.map((tag, index) => (
										<span
											key={index}
											className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300'
										>
											{tag}
										</span>
									))}
								</div>
								<div className='mt-4 flex justify-between items-center'>
									<Link
										href={photo.photographerUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='text-purple-600 dark:text-purple-400 hover:underline text-sm capitalize'
									>
										by: {photo.photographer}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
