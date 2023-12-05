"use client";
import React, { useState } from "react";

import { Tab } from "@headlessui/react";
import { cn } from "@/libs/utils";
interface TabSwitchProps{
	setTabCategory: (value:number) => void;
	arr: string[];
}
const TabSwitch = ({setTabCategory,arr}:TabSwitchProps) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	
	
	
	return (
		<div className="max-w-[28rem] px-2  sm:px-0">
			<Tab.Group
				selectedIndex={selectedIndex}
				onChange={(index) => {
					setSelectedIndex(index);
					setTabCategory(index);
				}}
			>
				<Tab.List className="flex space-x-1 rounded-2xl bg-violet-50/10 backdrop-blur  p-1">
					{arr.map((tabitems, index) => (
						<Tab
							
							key={index}
							className={({ selected }) =>
								cn(
									"w-full rounded-xl py-2 text-sm font-medium leading-5",
									"ring-white/60 ring-offset-2  focus:outline-none ",
									selected
										? "bg-white text-blue-700 shadow"
										: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
								)
							}
						>
							{tabitems}
						</Tab>
					))}{" "}
				</Tab.List>
			</Tab.Group>
		</div>
	);
};

export default TabSwitch;
