import Link from 'next/link';
import { navLinks } from '../data';

export default function AppBar() {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 backdrop:blur-md shadow-lg bg-slate-800'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<Link href='/' className='text-xl font-bold text-gray-900 dark:text-white'>
						Magic Moments
					</Link>

					<div className='flex items-center space-x-8'>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className='text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors'
							>
								{label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
