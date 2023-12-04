"use client";
import React, { useState } from "react";

import MenuButton from "@/components/ui/menu";
import ListBox from "@/components/ui/list-box";
import DataTable from "@/extra/Table/data-table";
import SearchState from "@/components/search-state";
import { useQuery } from "@tanstack/react-query";
import getCollection from "@/actions/getCollection";
import GridTableHeading from "./GridTable/grid-table-heading";
import { CollectionProps } from "@/types/site.type";
import { FilterProps } from "@/types/site.type";

const ClientFilter = () => {
	const [collectionData, setCollectionData] = useState([]);
	const [lastPage, setLastPage] = useState<number>(0);
	const [filter, setFilter] = useState<FilterProps>({
		search: "",
		blockchain: "",
		sort: "",
		order: "",
		page: 1,
	});
	const itemsPerPage: number = 10;

	// UseQuery hook for fetching data
	const { isLoading, error, data } = useQuery({
		queryKey: ["repoData", { filter }],
		queryFn: async () => {
			// Build query parameters
			const arr: FilterProps = { ...filter };

			// Make API request to get collection data
			const result = await getCollection(arr);
			const filteredCount = result.total;
			const filteredData = result.result;

			// Calculate last page
			const lastPageCount = Math.ceil(filteredCount / itemsPerPage);
			setLastPage(lastPageCount);

			// Update collection data based on pagination
			setCollectionData((prev: CollectionProps[]) =>
				filter.page === 1 ? filteredData : [...prev, ...filteredData]
			);

			// Return data and count
			return { filteredData, filteredCount };
		},
	});

	// Load more function
	const load = () => {
		setFilter({
			...filter,
			page: filter.page + 1,
		});
	};

	// Button component for loading more data
	const btn = (
		<button
			onClick={load}
			className="disabled:opacity-50 transition inline-flex items-center justify-center space-x-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10 shrink-0 saturate-[110%] border-gray-700/75 focus:ring-gray-600 bg-gray-600 text-white hover:bg-gray-700 hover:border-gray-700 px-3 py-2 text-sm font-medium rounded-md"
			disabled={isLoading}
		>
			{isLoading && (
				<div aria-label="Loading..." role="status">
					<svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						strokeLinejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						className="animate-spin w-4 h-4 stroke-white"
					>
						<path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
					</svg>
				</div>
			)}
			<span>{isLoading ? "loading..." : "load more"}</span>
		</button>
	);

	return (
		<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
			<div className="flex-col flex ">
				<div className="flex items-center gap-2 py-3 flex-col sm:flex-row">
					<div className=" w-full">
						<SearchState filter={filter} setFilter={setFilter} />
					</div>
					<div className="flex gap-2 w-full sm:w-auto ">
						<ListBox filter={filter} setFilter={setFilter} />
						<MenuButton filter={filter} setFilter={setFilter} />
					</div>
				</div>

				{!error && (
					<div className="flex flex-col w-full">
						<GridTableHeading
							filter={filter}
							filteredData={collectionData}
							loading={isLoading}
						/>
						{filter.page !== lastPage && (
							<div className="mx-auto my-4">{btn}</div>
						)}
					</div>
				)}
				{error && (
					<div className="w-full h-[30rem] flex justify-center items-center">
						Error: {error.message}
					</div>
				)}
			</div>
		</div>
	);
};

export default ClientFilter;
