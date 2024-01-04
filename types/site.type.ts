
export interface CollectionProps {
    _id?: string;
	slug?: string;
	name: string;
	description: string;
	blockchain: string;
	imageUrl: string;
	bannerUrl: string;
	supply: number;
	rating: number;
	whitelist: boolean;
	featured: boolean;
	verified: boolean;
	requirement: string;
	info: string;
	roadmap: string;
	mintPrice?: number;
	mintDate?: Date;
	startTime: string;
	x?: string;
	discord?: string;
    website?: string;
    createdAt?: Date;
}


export interface FilterProps {
	search: string;
	blockchain: string;
	sort: string;
	order: string;
	page: number;
}
export interface OptimizedImageProps{
	src: string;
	alt: string;
	className:string
}