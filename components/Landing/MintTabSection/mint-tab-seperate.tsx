"use client";
import React, { useEffect, useState } from "react";
import TabSwitch from "@/components/ui/tab-switch";

import CollectionCard from "@/components/Landing/MintTabSection/mint-tab-card-square";

import TabSwitchIcons from "@/components/ui/tab-switch-icons";
import { CollectionProps } from "@/types/site.type";
import MintTabCard from "@/components/Landing/MintTabSection/mint-tab-card-list";
import Link from "next/link";

const MintTabSeperateContainer = ({ trending, early }: any) => {
	// State variables initialization
	const [tabLayoutTrend, setTabLayoutTrend] = useState<number>(0);
	const [tabLayoutLatest, setTabLayoutLatest] = useState<number>(0);

	// Data extraction
	const trendingData = trending?.result;
	const earlyData = early?.result;

	return (
		<div className="flex flex-col gap-8">
			<div className="w-full flex flex-col gap-4 ">
				<div className=" flex justify-between">
					{/* Render TabSwitch and TabSwitchIcons components */}
					<div className="flex flex-col">
						<h2 className="text-3xl font-bold tracking-tight">Popular</h2>
						<p className="text-sm text-muted-foreground">
							Popular Mint across the blockchain
						</p>
					</div>
					<TabSwitchIcons setTabLayout={setTabLayoutTrend} />
				</div>
				{tabLayoutTrend === 0 && (
					<div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  content-center">
						{/* Render CollectionCard components based on earlyData */}
						{trendingData.length > 0 ? (
							trendingData.map((data: CollectionProps, index: number) => (
								<CollectionCard data={data} key={data._id} />
							))
						) : (
							<div className="w-full h-[30rem] flex justify-center items-center">
								Server Error
							</div>
						)}
					</div>
				)}
				{tabLayoutTrend === 1 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3">
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
				)}
				<Link
					href="/mints"
					className=" text-base max-w-sm mx-auto font-medium bg-gray-50 border border-gray-300 text-black transition-colors hover:bg-gray-200 duration-200   p-2 px-7 text-center  rounded-2xl"
				>
					view all
				</Link>
			</div>{" "}
			<div className="w-full flex flex-col gap-4 ">
				<div className=" flex justify-between">
					<div className="flex flex-col">
						<h2 className="text-3xl font-bold tracking-tight">Latest</h2>
						<p className="text-sm text-muted-foreground">
							Latest Projects across the blockchain
						</p>
					</div>
					<TabSwitchIcons setTabLayout={setTabLayoutLatest} />
				</div>
				{tabLayoutLatest === 0 && (
					<div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  content-center">
						{earlyData.length > 0 ? (
							earlyData.map((data: CollectionProps, index: number) => (
								<CollectionCard data={data} key={data._id} />
							))
						) : (
							<div className="w-full h-[30rem] flex justify-center items-center">
								Server Error
							</div>
						)}
					</div>
				)}
				{tabLayoutLatest === 1 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3">
						{/* Render MintTabCard components based on earlyData */}
						{earlyData.length > 0 ? (
							earlyData.map((data: CollectionProps, index: number) => (
								<MintTabCard data={data} key={data._id} index={index} />
							))
						) : (
							<div className="w-full h-[30rem] flex justify-center items-center">
								Server Error
							</div>
						)}
					</div>
				)}
				<Link
					href="/mints"
					className=" text-base max-w-sm font-medium mx-auto border border-gray-300 bg-gray-50 text-black transition-colors hover:bg-gray-200 duration-200  p-2 px-7 text-center  rounded-2xl"
				>
					view all
				</Link>
			</div>
		</div>
	);
};

export default MintTabSeperateContainer;
