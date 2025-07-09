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

export interface PromptInputProps {
	prompt: string;
	setPrompt: (prompt: string) => void;
	isGenerating: boolean;
	onGenerate: () => void;
}

export interface Photo {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	photographer: string;
	photographerUrl: string;
}

export interface GeneratedImageProps {
	imageUrl: string;
}
