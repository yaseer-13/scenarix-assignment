import { IconProps } from '../types';

export const CheckMarkIcon = ({ className }: IconProps) => (
	<svg
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
	</svg>
);
export const ChevronIcon = ({ className }: IconProps) => (
	<svg
		fill='none'
		stroke='currentColor'
		viewBox='0 0 20 20'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
	</svg>
);
