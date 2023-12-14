import Image from "next/image";
import React from "react";

import ColletionInfo from "@/actions/getCollectionInfo";
import { cn, formatDate, supplyCheck } from "@/libs/utils";
import MintInfoSection from "@/components/mint-info-section";
import Container from "@/components/container";
import TextGradient from "@/components/text-gradient";

const renderNotFound = () => (
	<div className=" min-h-screen flex justify-center items-center">
		<h1>Not Found.....</h1>
	</div>
);

export async function generateMetadata({
	params: { slug },
}: {
	params: { slug: string };
}) {
	try {
		const mint = await ColletionInfo(slug);
		if (!mint)
			return {
				title: "Not Found",
				description: "The page you are looking for does not exist.",
			};

		return {
			title: mint.name,
			description: mint.description,
			alternates: {
				canonical: `/mint/${mint.slug}`,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			title: "Not Found",
			description: "The page you are looking for does not exist.",
		};
	}
}

const MintDetailsPage = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	if (!slug) {
		return;
	}
	const mintDetails = await ColletionInfo(slug);

	if (mintDetails.success) {
		return renderNotFound();
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
			<Container>
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
						<p className="opacity-75 text-sm ">{discription}</p>
					</div>
					<div className=" flex flex-col md:flex-row">
						<div className=" md:mx-8">
							<div>
								<div className="grid grid-cols-2 grid-rows-2  min-w-[18rem] bg-gray-200/70 dark:bg-gray-200/20 rounded-xl w-full ">
									<div className=" flex-col flex   text-center  p-3 ">
										<div className=" font-semibold">Mint Date:</div>
										<div>{formatDate(mintDate)}</div>
									</div>
									<div className=" flex-col flex   text-center  p-3">
										<div className=" font-semibold">Supply:</div>
										<div>{supplyCheck(supply)}</div>
									</div>

									<div className=" flex-col  flex  text-center  p-3">
										<div className=" font-semibold">Network:</div>
										<div>
											<TextGradient text={blockchain} />
										</div>
									</div>
									<div className=" flex-col flex  text-center  p-3">
										<div className=" font-semibold">Mint Price:</div>
										<div>{mintPrice}</div>
									</div>
								</div>
								<div className="w-full my-4 rounded-lg text-gray-500 p-4 text-center text-md">
									Whitelish Status:
									<span
										className={cn(
											"",
											whitelist ? "text-green-500" : "text-red-500"
										)}
									>
										{whitelist ? "OPEN" : "CLOSE"}
									</span>
								</div>
							</div>
						</div>
						<div className="w-full">
							<MintInfoSection infoData={additionalInfo} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MintDetailsPage;
