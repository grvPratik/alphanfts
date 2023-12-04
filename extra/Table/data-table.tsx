import Image from "next/image";
import React from "react";
import DataRow from "./data-row";


interface DataTableProps{
	filter:any
	filteredData: any;
	loading: boolean;
}

const DataTable = ({filter, filteredData, loading }:DataTableProps) => {
// console.log(filteredData)
	
	if (loading && filter.page===1) {
		return <div>loading..........</div>
	}
	return (
		<>
			<div className=" overflow-x-auto -z-10">
				<table className="mt-4 w-full min-w-max table-auto text-left  border-solid ">
					<thead>
						<tr>
							<th className="cursor-pointer border-y border-blue-gray-100 bg-background text-letter p-4 transition-colors hover:bg-blue-gray-50">
								<p className="antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
									Collection Name
								</p>
							</th>
							<th className="cursor-pointer border-y border-blue-gray-100 bg-background text-letter p-4 transition-colors hover:bg-blue-gray-50">
								<p className="antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
									Mint Date
								</p>
							</th>
							<th className="cursor-pointer border-y border-blue-gray-100 bg-background text-letter p-4 transition-colors hover:bg-blue-gray-50">
								<p className="antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
									Mint Price
								</p>
							</th>
							<th className="cursor-pointer border-y border-blue-gray-100 bg-background text-letter p-4 transition-colors hover:bg-blue-gray-50">
								<p className="antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
									Supply
								</p>
							</th>
							<th className="cursor-pointer border-y border-blue-gray-100 bg-background text-letter p-4 transition-colors hover:bg-blue-gray-50">
								<p className="antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
									New
								</p>
							</th>
							<th className="cursor-pointer border-y border-blue-gray-100 bg-background text-letter p-4 transition-colors hover:bg-blue-gray-50">
								<p className="antialiased text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
									Social
								</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredData && filteredData.length > 0 ? (
							filteredData.map((row, index: number) => (
								<DataRow rowData={row} key={row._id} indexNum={index} />
							))
						) : (
							<td>
								<tr>
									<div className="">not found</div>{" "}
								</tr>
							</td>
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default DataTable;
