"use client";
import React, { useEffect, useState } from "react";
import TabSwitch from "@/components/ui/tab-switch";

import CollectionCard from "@/components/Landing/MintTabSection/mint-tab-card-square";

import TabSwitchIcons from "@/components/ui/tab-switch-icons";
import { CollectionProps } from "@/types/site.type";
import MintTabCard from "@/components/Landing/MintTabSection/mint-tab-card-list";

const MintTabContainer = ({ trending, early }: any) => {
	// State variables initialization
	const [tabLayout, setTabLayout] = useState<number>(0);
	const [mintData, setMintData] = useState<any[]>([]); // Adjust the type if possible
	const [tabCategory, setTabCategory] = useState<number>(0);
	const arr = ["Trending", "Early"];

	// Data extraction
	const trendingData = trending?.result;
	const earlyData = early?.result;

	// Update mintData based on tabCategory changes
	useEffect(() => {
		if (tabCategory === 0) {
			setMintData(trendingData);
		}
		if (tabCategory === 1) {
			setMintData(earlyData);
		}
	}, [tabCategory, trendingData, earlyData]); // Run this effect whenever tabCategory, trendingData, or earlyData change

	return (
		<div className="w-full ">
			<div className=" flex justify-between">
				{/* Render TabSwitch and TabSwitchIcons components */}
				<TabSwitch setTabCategory={setTabCategory} arr={arr} />
				<TabSwitchIcons setTabLayout={setTabLayout} />
			</div>
			{tabLayout === 0 && (
				<div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  content-center">
					{/* Render CollectionCard components based on mintData */}
					{mintData.length > 0 ? (
						mintData.map((data: CollectionProps, index: number) => (
							<CollectionCard data={data} key={data._id} />
						))
					) : (
						<div className="w-full h-[30rem] flex justify-center items-center">
							Server Error
						</div>
					)}
				</div>
			)}
			{tabLayout === 1 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3">
					{/* Render MintTabCard components based on mintData */}
					{mintData.length > 0 ? (
						mintData.map((data: CollectionProps, index: number) => (
							<MintTabCard data={data} key={data._id} index={index} />
						))
					) : (
						<div className="w-full h-[30rem] flex justify-center items-center">
							Server Error
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MintTabContainer;
