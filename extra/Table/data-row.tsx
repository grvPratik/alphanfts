import React from "react";
import Image from "next/image";
import { supplyCheck } from "@/libs/utils";

const DataRow = ({ rowData, indexNum }) => {
	const {
		slug,
		name,
		blockchain,
		imageUrl,
		bannerUrl,
		supply,
		rating,
		whitelist,

		verified,
		mintPrice,
		mintDate,
		startTime,
		createdAt,
		x,
		discord,
		website,
	} = rowData;
	return (
		<tr className="">
			<td className="p-4 border-b ">
				<div className="flex items-center gap-3">
					<div className="relative inline-block  rounded-md w-10 h-10 overflow-hidden ">
						<Image
							fill
							src={imageUrl}
							alt={name}
							className=" object-cover object-center absolute "
						/>
					</div>
					<div className="flex flex-col">
						<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
							{name}
						</p>
						<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
							solana
						</p>
					</div>
				</div>
			</td>
			<td className="p-4 border-b border-blue-gray-50">
				<div className="flex items-center gap-3">
					<div className="flex flex-col">
						<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
							{mintDate}
						</p>
						<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
							Mint Time: {startTime}
						</p>
					</div>
				</div>
			</td>
			<td className="p-4 border-b border-blue-gray-50">
				<div className="flex flex-col">
					<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
						{mintPrice}
					</p>
				</div>
			</td>
			<td className="p-4 border-b border-blue-gray-50">
				<div className="w-max">
					{/* <div
										className="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md"
										
									>
										<span className="">Completed</span>
									</div> */}
					<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
						{supplyCheck(supply)}
					</p>
				</div>
			</td>
			<td className="p-4 border-b border-blue-gray-50">
				<p className="block antialiased text-sm leading-normal text-blue-gray-900 font-normal">
					{createdAt}
				</p>
			</td>
			<td className="p-4 border-b border-blue-gray-50">
				<button
					className="relative align-middle select-none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
					type="button"
				>
					<span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							className="h-4 w-4"
						>
							<path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
						</svg>
					</span>
				</button>
			</td>
		</tr>
	);
};

export default DataRow;
