"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchInput from "@/components/search-input";
import { useQuery } from "@tanstack/react-query";
import getCollection from "@/actions/getCollection";
import { CollectionProps } from "@/types/site.type";
import useOnClickOutside from "@/hooks/useOnClickOutside";

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
	const handleClick = () => {
		setSearchMenu(true);
		console.log("handleclick ")
	};
	const handleClose = () => {
		setSearchMenu(false);
		console.log("handleclose ");
	};
	console.log(searchResult);
	useOnClickOutside(searchDataRef, handleClose);
	return (
		<div ref={searchDataRef} className="relative max-w-[27rem]">
			<div onClick={handleClick}>
				<SearchInput setSearch={setSearchValue} />{" "}
			</div>
			{searchMenu &&
				(isLoading ? (
					<div>Loading..</div>
				) : (
					<div className="absolute w-full top-full left-0  ">
						{searchResult && searchResult.length > 0 ? (
							<div className=" relative mt-3 flex flex-col gap-1 border-violet-950  bg-background shadow-md max-h-80  overflow-y-auto z-50 p-3 rounded overflow-hidden">
								{searchResult.map((result: CollectionProps, index) => (
									<div className="w-full " key={index}>
										<Link href={`/mints${result.slug}`}>
											<div className="flex items-center gap-3 p-1.5 rounded hover:bg-violet-950 cursor-pointer ">
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
							<div>Not Found</div>
						)}
					</div>
				))}
		</div>
	);
};

export default SearchData;
