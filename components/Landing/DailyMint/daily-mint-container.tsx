import React from "react";
import DailyMintCard from "./daily-mint-card";
import { CollectionProps } from "@/types/site.type";
import { cn } from "@/libs/utils";
const data = {
	_id: "654dedb15246c45522fb32fe",
	slug: "bratsonsol",
	name: "Brats OG FREE MINT",
	description: "Bringing back the fun of degen mints on Solana",
	blockchain: "Solana",
	imageUrl:
		"https://res.cloudinary.com/dukcc4zkg/image/upload/v1699605712/gd9gdgs8aptdqe0u7csg.png",
	bannerUrl:
		"https://res.cloudinary.com/dukcc4zkg/image/upload/v1699605720/bc2of7iytzlc9r3x9xes.jpg",
	supply: 1,
	rating: 4,
	whitelist: true,
	featured: false,
	verified: false,
	requirement: "",
	info: "",
	roadmap: "",
	mintPrice: 0,
	mintDate: null,
	startTime: "",
	x: "https://twitter.com/Bratsonsol",
	discord: "https://discord.com/invite/EHftagUhRY",
	website: "",
	__v: 0,
	createdAt: "2023-11-10T08:45:37.876Z",
	updatedAt: "2023-11-10T08:45:37.876Z",
};

interface DailyMintContainerProps {
	dailyMintData?: CollectionProps[]; // Optional array of CollectionProps or undefined
}
const DailyMintContainer: React.FC<DailyMintContainerProps> = ({ dailyMintData }) => {
	return (
		<div className="flex flex-col">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Daily Mint</h2>
				<p className="text-sm text-muted-foreground">
					Explore the Minting Projects
				</p>
			</div>
			<div
				className={cn(
					dailyMintData && dailyMintData.length > 0
						? " w-full gap-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-items-center"
						: "w-full"
				)}
			>
				{dailyMintData && dailyMintData.length > 0 ? (
					dailyMintData?.map((data: CollectionProps, index: number) => (
						<DailyMintCard data={data} key={data._id} />
					))
				) : (
					<div className="w-full py-12 flex justify-center items-center">
						No Mints Today
					</div>
				)}
			</div>
		</div>
	);
};

export default DailyMintContainer;
