"use client";
import React, { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import { cn } from "@/libs/utils";
interface SearchInputProps {
	setSearch: (value: string) => void;
	onClick: () => void;
	modalState: boolean;
}
const SearchInput = ({ setSearch, onClick, modalState }: SearchInputProps) => {
	const [searchInput, setSearchInput] = useState("");
	const debouncedSearch = useDebounce(searchInput, 500);

	useEffect(() => {
		if (debouncedSearch !== null) {
			const finalSearch = encodeURIComponent(debouncedSearch);
			setSearch(finalSearch);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<div
			onClick={onClick}
			className="relative  dark:bg-gray-900 max-w-[27rem] w-full mx-auto z-40 flex flex-row-reverse items-center border-solid border transition-[border-color] overflow-hidden    hover:border-gray-300  rounded-full font-light text-sm  "
		>
			<input
				name="search"
				placeholder="Search..."
				value={searchInput}
				type="text"
				onChange={handleChange}
				className={cn(
					"h-9 md:h-10 focus:outline-none  transition-all duration-200 ease-in-out w-full antialiased dark:bg-gray-900",
					modalState ? "-translate-x-6 focus:outline-none" : ""
				)}
			/>
			<div
				className={cn(
					"pl-3.5 pr-1.5  relative h-10 flex items-center justify-center transition-all  ease-in-out duration-150 "
				)}
			>
				<svg
					className={cn(
						"h-4 w-4  bg-transparent opacity-75",
						modalState ? "opacity-0" : ""
					)}
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 56.966 56.966"
					xmlSpace="preserve"
				>
					<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
				</svg>
			</div>
		</div>
	);
};

export default SearchInput;
