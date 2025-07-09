'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'pexels';
import { useCallback, useEffect, useState } from 'react';
import { ErrorIcon } from '../Icons';

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

	const fetchPhotos = useCallback(async () => {
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
				image: photo.src.medium,
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
	}, []);

	useEffect(() => {
		fetchPhotos();
	}, [fetchPhotos]);

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
						<ErrorIcon className='w-12 h-12 mx-auto mb-4' />
					</div>
					<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2'>
						Oops! Something went wrong
					</h3>
					<p className='text-gray-600 dark:text-gray-300 mb-6'>{error}</p>
					<button
						onClick={fetchPhotos}
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
							<div className='relative aspect-[4/3] overflow-hidden'>
								<Image
									src={photo.image}
									alt={photo.title}
									fill
									className='object-cover transition-transform duration-500 hover:scale-110'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									placeholder='blur'
									blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1IiAvPjwvc3ZnPg=='
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
							</div>
							<div className='p-4'>
								<p className='text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2'>
									{photo.description}
								</p>
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
