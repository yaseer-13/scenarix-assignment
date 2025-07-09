import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4'>404</h1>
				<p className='text-gray-600 dark:text-gray-300 mb-8'>Oops! Page not found.</p>
				<Link
					href='/'
					className='bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
				>
					Go back to home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
