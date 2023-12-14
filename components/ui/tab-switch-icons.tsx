"use client";
import React, { useState } from "react";

import { Tab } from "@headlessui/react";
import { cn } from "@/libs/utils";
import {
	ListBulletIcon,
	Square2StackIcon,
	Squares2X2Icon,
} from "@heroicons/react/20/solid";

const TabSwitchIcons = ({
	setTabLayout,
}: {
	setTabLayout: (value: number) => void;
}) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	return (
		<div className=" px-2 py-4 shadow-lg sm:px-0">
			<Tab.Group
				selectedIndex={selectedIndex}
				onChange={(index) => {
					setSelectedIndex(index);
					setTabLayout(index);
				}}
			>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 backdrop-blur items-center text-gray-700 p-1">
					<Tab
						className={({ selected }) =>
							cn(
								" rounded-lg p-2",
								"ring-white/60 ring-offset-2  focus:outline-none ",
								selected
									? "bg-white  shadow"
									: "text-gray-500 hover:bg-white/[0.12] hover:text-white"
							)
						}
					>
						<Squares2X2Icon className="h-5 w-5 " />
					</Tab>
					<Tab
						className={({ selected }) =>
							cn(
								" rounded-lg p-2",
								"ring-white/60 ring-offset-2  focus:outline-none ",
								selected
									? "bg-white  shadow"
									: "text-gray-500 hover:bg-white/[0.12] hover:text-white"
							)
						}
					>
						<ListBulletIcon className="h-5 w-5" />
					</Tab>
				</Tab.List>
			</Tab.Group>
		</div>
	);
};

export default TabSwitchIcons;
