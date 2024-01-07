import React from "react";

import SliderContainer from "@/components/Landing/Hero/slider-container";
import getCollection from "@/actions/getCollection";
import DailyMintContainer from "@/components/Landing/DailyMint/daily-mint-container";
import { startOfDay, endOfDay, format } from "date-fns";
import MintTabSeperateContainer from "@/components/Landing/MintTabSection/mint-tab-seperate";

const RootPage = async () => {
	// Get today's date boundaries
	const today = new Date();
	const startToday = format(today, "yyyy-MM-dd");

	
	// Use these boundaries in your query
	const getTodayMint = await getCollection({
		date: startToday,
	});
	const getTrending = await getCollection({
		sort: "rating",
		order: "desc",
		items: 8,
	});

	const getEarly = await getCollection({
		sort: "createdAt",
		order: "desc",
		items: 8,
	});

	return (
		<div className="flex flex-col gap-6  mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
			<SliderContainer data={getEarly} />
			<DailyMintContainer dailyMintData={getTodayMint} />
			<MintTabSeperateContainer trending={getTrending} early={getEarly} />
		</div>
	);
};

export default RootPage;
