import Image from "next/image";
import React from "react";

import ColletionInfo from "@/actions/getCollectionInfo";
import { formatDate, supplyCheck } from "@/libs/utils";
import MintInfoSection from "@/components/mint-info-section";

const MintDetailsPage = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	console.log(slug);
	if (!slug) {
		return <div> not found</div>;
	}
	const mintDetails = await ColletionInfo(slug);
	if (mintDetails?.length === 0) {
		return (
			<div className=" w-[100vw] h-[100vh] flex justify-center items-center">
				<h1>Not Found.....</h1>
			</div>
		);
	}
	const {
		name,
		imageUrl,
		discription,
		bannerUrl,
		supply,
		rating,
		whitelist,
		verified,
		mintPrice,
		startTime,
		blockchain,
		mintDate,
		createdAt,
		requirement,
		info,
		roadmap,
		x,
		discord,
		website,
	} = mintDetails;
	const slugId = mintDetails?.slug;

	const additionalInfo = {
		requirement,
		info,
		roadmap,
	};
	return (
		<div>
			<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
				<div className="flex flex-col">
					<div className="relative w-full aspect-[9/2] rounded-xl overflow-hidden">
						<Image src={bannerUrl} alt={name} fill className=" object-cover" />
					</div>
					<div className="my-2 md:mt-4 flex md:mx-6 gap-4 ">
						<div className="relative flex-shrink-0   md:w-24 md:h-24 w-16 h-16 aspect-square rounded-2xl overflow-hidden">
							<Image src={imageUrl} alt={name} fill className=" object-cover" />
						</div>
						<div className="mt-2 md:mt-4 ">
							<div className=" md:text-3xl text-xl md:font-bold font-semibold leading-none">
								{name}
							</div>
							<div className=" text-xs">@{slugId}</div>
						</div>
					</div>
					<div className="my-2 flex md:mx-6   flex-col">
					
						<p className="opacity-75 text-sm ">{discription} </p>
					</div>
					<div className=" flex flex-col md:flex-row">
						<div className=" md:mx-8">
							<div>
								<div className="grid grid-cols-2 grid-rows-2  min-w-[18rem]  card rounded-xl w-full ">
									<div className=" flex-col flex   text-center  p-3 ">
										<div>Mint Date:</div>
										<div>{formatDate(mintDate)}</div>
									</div>
									<div className=" flex-col flex   text-center  p-3">
										<div>Supply:</div>
										<div>{supplyCheck(supply)}</div>
									</div>

									<div className=" flex-col  flex  text-center  p-3">
										<div>Network:</div>
										<div>{blockchain}</div>
									</div>
									<div className=" flex-col flex  text-center  p-3">
										<div>Mint Price:</div>
										<div>{mintPrice}</div>
									</div>
								</div>
								<div className="w-full card my-4 rounded-lg p-4 text-center  text-lg">
									Whitelish Status:
									<span className="green">{whitelist ? "OPEN" : "CLOSE"}</span>
								</div>
							</div>
						</div>
						<div className="w-full">
							<MintInfoSection infoData={additionalInfo} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MintDetailsPage;
