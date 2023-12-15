import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
	format,
	formatDistanceToNow,
	isValid,
	minutesToSeconds,
} from "date-fns";
import RatingValue from "@/components/ui/rating-value";
import { CollectionProps } from "@/types/site.type";
import { formatDate, supplyCheck } from "@/libs/utils";
interface GridRowProps {
	rowData: CollectionProps;
	indexNum: number;
}

const GridTableRow = ({ rowData, indexNum }: GridRowProps) => {
	// Destructuring rowData object
	const {
		slug,
		name,
		imageUrl,
		supply,
		rating,
		whitelist,
		verified,
		mintPrice,
		startTime,
		blockchain,
		mintDate,
		createdAt,
		x,
		discord,
		website,
	} = rowData;

	// Function to calculate time ago
	const getTimeAgo = (inputDate: Date | null | undefined) => {
		if (!inputDate) {
			return "NULL";
		}
		const myDate = new Date(inputDate);
		const timeAgo = formatDistanceToNow(myDate, { addSuffix: true });
		return timeAgo;
	};

	// Example usage:
	// Replace this with your createdAt date
	const timeAgoString = getTimeAgo(createdAt);

	// Function to format a date

	const formattedDate = formatDate(mintDate);

	return (
		<Link href={`/mints/${slug}`}>
			<div
				className="grid grid-cols-7 gap-3 py-4   transition ease-in-out 
				hover:translate-y-1 hover:scale-99 hover:bg-gray-200/40 dark:hover:bg-violet-600/5 rounded
				duration-100"
			>
				{/* */}
				<div className=" my-auto col-span-2 flex items-center gap-3">
					<div className="mx-2 my-auto">{indexNum + 1}.</div>
					<div className=" flex items-center">
						<div className="relative inline-block  rounded-md w-10 h-10 overflow-hidden ">
							<Image
								sizes="100%"
								fill
								src={imageUrl}
								alt={name}
								className=" object-cover object-center absolute "
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
							{name}
						</p>
						<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
							{blockchain}
						</p>
					</div>
				</div>
				<div className="my-auto col-span-1">
					<div className="flex items-center gap-3">
						<div className="flex flex-col">
							<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
								{formattedDate}
							</p>
							{/* <p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
								Mint Time: {startTime}
							</p> */}
						</div>
					</div>
				</div>
				<div className="my-auto  col-span-1">
					{" "}
					<div className="flex items-center gap-3">
						<div className="flex flex-col">
							<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
								{mintPrice}
							</p>
						</div>
					</div>
				</div>
				<div className="my-auto col-span-1">
					{" "}
					<div className="flex items-center gap-3">
						<div className="flex flex-col">
							<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
								{supplyCheck(supply)}
							</p>
						</div>
					</div>
				</div>
				<div className="my-auto col-span-1">
					{" "}
					<div className="flex items-center gap-3">
						<div className="flex flex-col">
							<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
								{timeAgoString}
							</p>
						</div>
					</div>
				</div>
				<div className="my-auto col-span-1">
					{" "}
					<div className="flex items-center gap-3">
						<div className="flex flex-col">
							<div className="w-max">
								<RatingValue rating={rating} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default GridTableRow;
