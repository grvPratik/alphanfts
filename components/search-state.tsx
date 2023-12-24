"use client";

import React, { useState, useEffect } from "react";

import useDebounce from "@/hooks/useDebounce";
import { FilterProps } from "@/types/site.type";

interface SearchStateProps {
	filter: FilterProps;
	setFilter: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const SearchState = ({ filter, setFilter }: SearchStateProps) => {
	const [searchInput, setSearchInput] = useState("");
	const debouncedSearch = useDebounce(searchInput, 500);

	useEffect(() => {
		if (debouncedSearch !== null) {
			setFilter({
				...filter,
				search: encodeURIComponent(debouncedSearch),
				page: 1,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<div>
			<label htmlFor="table-search" className="sr-only">
				Search
			</label>
			<div className="relative w-full ">
				<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 bg-transparent text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="text"
					id="table-search-users"
					className="block p-2 ps-10 text-sm text-gray-900 shadow-sm border border-solid  border-border   rounded-lg w-full bg-gray-50/10  dark:bg-background/10  outline-none   dark:placeholder-gray-400 dark:text-white "
					placeholder="Search for users"
					value={searchInput}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default SearchState;
