import getCollection from '@/actions/getCollection';
import MintTabCard from '@/components/Landing/MintTabSection/mint-tab-card-list';
import CollectionCard from '@/components/Landing/MintTabSection/mint-tab-card-square';
import MintTabSeperateContainer from '@/components/Landing/MintTabSection/mint-tab-seperate';
import { CollectionProps } from '@/types/site.type';
import React from 'react'

const TrendingSection = async () => {
    


    	const getTrending = await getCollection({
				sort: "rating",
				order: "desc",
				items: 13,
			});

			const getEarly = await getCollection({
				sort: "createdAt",
				order: "desc",
				items: 8,
            });
    const trendingData= getTrending?.result
  return (
		<div className="grid my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3">
			{/* Render MintTabCard components based on earlyData */}
			{trendingData.length > 0 ? (
				trendingData.map((data: CollectionProps, index: number) => (
					<MintTabCard data={data} key={data._id} index={index} />
				))
			) : (
				<div className="w-full h-[30rem] flex justify-center items-center">
					Server Error
				</div>
			)}
		</div>
	);
}

export default TrendingSection