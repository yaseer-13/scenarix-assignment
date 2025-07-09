import { useCallback, useEffect, useState } from 'react';
import { PromptInputProps } from '../types';

export default function PromptInput({
	prompt,
	setPrompt,
	isGenerating,
	onGenerate,
}: PromptInputProps) {
	const [localPrompt, setLocalPrompt] = useState(prompt);
	useEffect(() => {
		setLocalPrompt(prompt);
	}, [prompt]);

	const handlePromptChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			const newValue = e.target.value;
			setLocalPrompt(newValue);
			setPrompt(newValue);
		},
		[setPrompt]
	);

	const buttonText = isGenerating ? 'Generating...' : 'Generate Art';
	const charCount = localPrompt.replace(/\s/g, '').length; // Remove all whitespace characters before counting
	const isButtonDisabled = isGenerating || !localPrompt.trim();

	const handleGenerate = useCallback(() => {
		if (isButtonDisabled) return;
		onGenerate();
	}, [isButtonDisabled, onGenerate]);

	return (
		<div className='mb-6'>
			<label htmlFor='prompt' className='block text-sm font-medium mb-2'>
				Describe your artwork
			</label>
			<textarea
				id='prompt'
				value={localPrompt}
				onChange={handlePromptChange}
				className='w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
				placeholder='A serene landscape with mountains and a lake at sunset...'
			/>
			<span className='text-sm text-gray-500 mt-1'>Characters: {charCount}</span>
			<button
				onClick={handleGenerate}
				disabled={isButtonDisabled}
				className='w-full mt-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed'
			>
				{buttonText}
			</button>
		</div>
	);
}
