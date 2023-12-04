import React from "react";

import SliderContainer from "@/components/Landing/Hero/slider-container";
import getCollection from "@/actions/getCollection";
import DailyMintContainer from "@/components/Landing/DailyMint/daily-mint-container";
import { startOfDay, endOfDay } from "date-fns";
import MintTabSeperateContainer from "@/components/Landing/MintTabSection/mint-tab-seperate";
import ToggleTheme from "@/components/ui/Toggletheme";

const RootPage = async () => {
	// Get today's date boundaries
	const today = new Date();
	const startOfToday = startOfDay(today);
	const endOfToday = endOfDay(today);

	// Use these boundaries in your query
	const getTodayMint = await getCollection({
		mintDate: {
			$gte: startOfToday, // Greater than or equal to start of today
			$lte: endOfToday, // Less than or equal to end of today
		},
	});
	const getTrending = await getCollection({
		sort: "rating",
		order: "asc",
		items: 8,
	});

	const getEarly = await getCollection({
		sort: "createdAt",
		order: "asc",
		items: 8,
	});

	console.log(getTodayMint, "today mint");
	return (
		<div className="flex flex-col gap-6  mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
			<SliderContainer data={getTrending} />
			<DailyMintContainer dailyMintData={getTodayMint} />
			<MintTabSeperateContainer trending={getTrending} early={getEarly} />
			<ToggleTheme />
		</div>
	);
};

export default RootPage;
