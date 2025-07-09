export interface IconProps {
	className?: string;
}

interface BlogPost {
	title: string;
	excerpt: string;
	date: string;
	readTime: number;
	image: string;
	link: string;
}

export interface BlogPostCardProps {
	post: BlogPost;
}

interface Feature {
	title: string;
	description: string;
}

export interface FeaturesProps {
	features: Feature[];
}
