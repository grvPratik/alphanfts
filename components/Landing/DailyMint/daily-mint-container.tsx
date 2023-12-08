import React from "react";
import DailyMintCard from "./daily-mint-card";
import { CollectionProps } from "@/types/site.type";
import { cn } from "@/libs/utils";


interface ApiDataprops {
	dailyMintData?: {
		success: boolean;
		total: number;
		result:CollectionProps[]

	} // Optional array of CollectionProps or undefined
}
const DailyMintContainer: React.FC<ApiDataprops> = ({ dailyMintData }) => {
	
	const dailyMintResult= dailyMintData?.result
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
					dailyMintResult && dailyMintResult.length > 0
						? " w-full gap-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-items-center"
						: "w-full"
				)}
			>
				{dailyMintResult && dailyMintResult.length > 0 ? (
					dailyMintResult?.map((data: CollectionProps, index: number) => (
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
