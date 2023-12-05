"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
	ArrowSmallDownIcon,
	ArrowSmallUpIcon,
	BarsArrowUpIcon,
} from "@heroicons/react/20/solid";
import { FilterProps } from "@/types/site.type";

interface SortProps {
	name: string;
	type: "asc" | "desc";
	params: string;
}
interface MenuButtonProps{
	filter: FilterProps;
	setFilter: (value:FilterProps) => void;
}
export default function MenuButton({ filter, setFilter }: MenuButtonProps) {
	
	const mintType:SortProps[] = [
		{ name: "Trending", type: "asc", params: "rating" },
		{ name: "Trending", type: "desc", params: "rating" },
		{ name: "Latest", type: "asc", params: "createdAt" },
		{ name: "Latest", type: "desc", params: "createdAt" },
	];

	const handleClick = (value:SortProps) => (event:React.MouseEvent<HTMLButtonElement>) => {
		setFilter({
			...filter,
			sort: value.params,
			order: value.type,
			page: 1,
		});
	};

	return (
		<div className=" z-40  text-right">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded-md  px-1.5 py-1.5 text-sm font-medium bg-white/10 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
						<BarsArrowUpIcon
							className=" h-6 w-6 text-current hover:text-violet-100"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 mt-2 w-[12rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
						{mintType.map((person, personIdx) => (
							<Menu.Item key={personIdx}>
								{({ active }) => (
									<button
										onClick={handleClick(person)}
										className={`${
											active ? "bg-gray-600 text-white" : "text-gray-900"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm `}
									>
										{person.type === "asc" ? (
											<ArrowSmallUpIcon
												className="mr-2 h-5 w-5"
												aria-hidden="true"
											/>
										) : (
											<ArrowSmallDownIcon
												className="mr-2 h-5 w-5"
												aria-hidden="true"
											/>
										)}
										{person.name}
									</button>
								)}
							</Menu.Item>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
