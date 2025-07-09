import Image from 'next/image';
import Link from 'next/link';
import { ChevronIcon } from '../Icons';

interface BlogPost {
	title: string;
	excerpt: string;
	date: string;
	readTime: number;
	image: string;
	link: string;
}

interface BlogPostCardProps {
	post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
	return (
		<Link href={post.link} className='h-full group'>
			<article className='h-full flex flex-col justify-between bg-white dark:bg-gray-800 border-2 border-transparent hover:border-purple-600 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden'>
				<div className='relative h-72'>
					<Image
						width={0}
						height={0}
						sizes='100vw'
						src={post.image}
						alt={post.title}
						className='object-cover w-full h-full'
						loading='lazy'
					/>
				</div>
				<div className='p-6 flex flex-col h-full'>
					<div className='flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3'>
						<span>{post.date}</span>
						<span className='mx-2'>•</span>
						<span>{post.readTime} min read</span>
					</div>
					<h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline'>
						{post.title}
					</h2>
					<p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed flex-grow'>
						{post.excerpt}
					</p>
					<div className='flex items-center'>
						<span className=' font-medium text-purple-600 group-hover:text-white transition-colors'>
							Read More
						</span>

						<ChevronIcon className='w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1 text-purple-600 group-hover:text-white transition-colors' />
					</div>
				</div>
			</article>
		</Link>
	);
}
