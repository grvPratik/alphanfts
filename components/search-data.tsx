"use client";
import React, { Fragment, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchInput from "@/components/search-input";
import { useQuery } from "@tanstack/react-query";
import getCollection from "@/actions/getCollection";
import { CollectionProps } from "@/types/site.type";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { Transition } from "@headlessui/react";

const SearchData = () => {
	const [searchResult, setSearchResult] = useState([]);
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchMenu, setSearchMenu] = useState<boolean>(false);
	const searchDataRef = useRef<HTMLDivElement>(null);
	const { isLoading, error, data } = useQuery({
		queryKey: ["search", searchValue],
		queryFn: async () => {
			// Build query parameters

			// Make API request to get collection data
			const result = await getCollection({
				search: searchValue,
				items: 10,
			});
			const filteredCount = result.total;
			const filteredData = result.result;

			// Update collection data based on pagination
			setSearchResult(filteredData);

			// Return data and count
			return { filteredData, filteredCount };
		},
	});
	console.log(data)
	
	const handleClick = () => {
		setSearchMenu(true);
	};
	const handleClose = () => {
		setSearchMenu(false);
	};

	useOnClickOutside(searchDataRef, handleClose);
	return (
		<div ref={searchDataRef} className="relative z-50 max-w-[27rem]">
			<div onClick={handleClick}>
				<SearchInput setSearch={setSearchValue} />{" "}
			</div>
			{searchMenu &&
				(isLoading ? (
					<div className="absolute w-full top-full left-0 h-20 flex items-center justify-center">
						<div aria-label="Loading..." role="status">
							<svg
								className="animate-spin w-6 h-6 fill-slate-800"
								viewBox="3 3 18 18"
							>
								<path
									className="opacity-20"
									d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
								></path>
								<path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
							</svg>
						</div>
					</div>
				) : (
					<div className="absolute w-full top-full left-0  mt-3 border border-solid  rounded-xl overflow-hidden">
						{searchResult && searchResult.length > 0 && searchValue ? (
							<div className=" relative flex flex-col gap-1 hidescroll bg-background  max-h-80  overflow-y-auto z-50 p-3 rounded overflow-hidden">
								{searchResult.map((result: CollectionProps, index) => (
									<div className="w-full " key={index}>
										<Link href={`/mints${result.slug}`}>
											<div className="flex items-center gap-3 p-1.5 rounded hover:bg-violet-950/10 cursor-pointer ">
												<div>
													<Image
														className="  object-cover bg-cover rounded overflow-hidden"
														src={result.imageUrl}
														alt={result.name}
														height={30}
														width={30}
													/>
												</div>
												<div className=" font-medium text-base">
													{result.name}
												</div>
											</div>{" "}
										</Link>
									</div>
								))}
							</div>
						) : (
							searchResult.length>0 && <div>not found</div>
						)}
					</div>
				))}
		</div>
	);
};

export default SearchData;


function SearchTableItem() {
	
}