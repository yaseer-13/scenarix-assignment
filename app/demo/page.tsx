'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import GeneratedImage from '../components/GeneratedImage';
import PromptInput from '../components/PromptInput';

export default function Demo() {
	const [prompt, setPrompt] = useState('');
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImage, setGeneratedImage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleGenerate = useCallback(async () => {
		if (!prompt) {
			setError('Prompt cannot be empty');
			return;
		}

		setIsGenerating(true);
		setError(null);

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setGeneratedImage('/images/11.webp');
		} catch (err) {
			setError('Failed to generate image');
		} finally {
			setIsGenerating(false);
		}
	}, [prompt]);

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold text-center mb-8'>Try MagicMoments</h1>

				<div className='max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6'>
					<PromptInput
						prompt={prompt}
						setPrompt={setPrompt}
						isGenerating={isGenerating}
						onGenerate={handleGenerate}
						aria-label='Enter your prompt'
					/>

					{error && <p className='text-red-500 text-center mt-4'>{error}</p>}

					{generatedImage && <GeneratedImage imageUrl={generatedImage} />}
				</div>

				<div className='mt-12 text-center'>
					<p className='text-gray-600 dark:text-gray-300'>
						Want to create more? Check out our{' '}
						<Link href='/pricing' className='text-purple-600 hover:underline'>
							pricing plans
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
