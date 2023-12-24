import React from "react";
import GridTableRow from "./grid-table-row";
import TableRowLoading from "@/components/Skelton/table-row-loading";
import { CollectionProps } from "@/types/site.type";

interface DataTableProps {
	filter: any;
	filteredData: any;
	loading: boolean;
}

const GridTableHeading = ({
	filter,
	filteredData,
	loading,
}: DataTableProps) => {
	return (
		<div className="overflow-x-auto  hidescroll">
			<div className="-z-40 flex flex-col min-w-[54rem] text-letter">
				<div className="w-full  ">
					<div className="grid grid-cols-7 gap-3 py-3 font-light">
						<div className=" col-span-2 antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
							Collction name
						</div>
						<div className="col-span-1 antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
							Mint Date{}
						</div>
						<div className="col-span-1 antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70 ">
							Mint Price
						</div>
						<div className="col-span-1 antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
							Supply
						</div>
						<div className="col-span-1 antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
							Created At {}
						</div>
						<div className="col-span-1 antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
							Rating
						</div>
					</div>
				</div>
				{loading && filter.page === 1 ? (
					<TableRowLoading />
				) : filteredData && filteredData.length > 0 ? (
					filteredData.map((row: CollectionProps, index: number) => (
						<GridTableRow rowData={row} key={row._id} indexNum={index} />
					))
				) : (
					<div className="w-full h-[30rem] flex justify-center items-center">
						not found
					</div>
				)}
			</div>
		</div>
	);
};

export default GridTableHeading;
