import getCollection from "@/actions/getCollection";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const collections = await getCollection({ items: 50 });
	const data = collections.result;

	const collectionEntries: MetadataRoute.Sitemap = data.map((item:any) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/mints/${item.slug}`,
		lastModified: new Date(item.updatedAt),
    }));
    
    return [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			},
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/mints`,
			},
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
			},
			...collectionEntries,
		];
}
