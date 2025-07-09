import Link from 'next/link';
import { CheckMarkIcon } from '../Icons';
import { plans } from '../data';

export default function Pricing() {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold text-center mb-4'>Simple, Transparent Pricing</h1>
				<p className='text-center text-gray-600 dark:text-gray-300 mb-12'>
					Choose the plan that's right for you
				</p>

				<div className='flex overflow-hidden gap-8 max-w-5xl mx-auto flex-wrap justify-center'>
					{plans.map((plan) => (
						<div
							className='min-w-[250px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col'
							key={'key'}
						>
							<h2 className='text-2xl font-bold mb-4'>{plan.name}</h2>
							<div className='mb-6'>
								<span className='text-4xl font-bold'>${plan.price}</span>
								<span className='text-gray-600 dark:text-gray-300'>/month</span>
							</div>
							<ul className='space-y-4 mb-8 flex-grow'>
								{plan.features.map((feature, index) => (
									<li key={index} className='flex items-start'>
										<CheckMarkIcon className='w-5 h-5 text-green-500 mr-2 mt-1' />
										{feature}
									</li>
								))}
							</ul>
							<Link
								href={plan.ctaLink}
								className={`block text-center py-3 px-6 rounded-lg font-medium ${
									plan.popular
										? 'bg-purple-600 text-white hover:bg-purple-700'
										: 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
								}`}
							>
								{plan.ctaText}
							</Link>
						</div>
					))}
				</div>

				<div className='mt-12 text-center'>
					<p className='text-gray-600 dark:text-gray-300'>
						Need a custom plan?{' '}
						<a href='/contact' className='text-purple-600 hover:underline'>
							Contact us
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
