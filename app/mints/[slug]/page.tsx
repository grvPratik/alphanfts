
import Image from "next/image";
import React from "react";

import ColletionInfo from "@/actions/getCollectionInfo";
import { cn, formatDate, supplyCheck } from "@/libs/utils";
import MintInfoSection from "@/components/mint-info-section";
import Container from "@/components/container";
import TextGradient from "@/components/text-gradient";
import OptImage from "@/components/optimised-image";

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
				canonical: `/mints/${mint.slug}`,
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
//   console.log(mintDetails)
	if (mintDetails.success ===false) {

		return renderNotFound()
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
		currFollower,
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
		<Container>
			<div className="flex flex-col">
				<OptImage
					src={bannerUrl}
					alt={name}
					className="relative w-full aspect-[9/2] max-h-40 rounded-xl overflow-hidden"
				/>

				<div className="my-2 md:mt-4 flex md:mx-6 gap-4 items-center">
					<div className="relative flex-shrink-0  md:w-20 md:h-20 w-14 h-14 aspect-square rounded-2xl overflow-hidden">
						<Image
							src={imageUrl}
							alt={name}
							sizes="100%"
							fill
							className=" object-cover"
						/>
					</div>
					<div className="flex flex-col items-sart gap-1 md:gap-2">
						<div className=" md:text-xl text-lg md:font-bold font-semibold line-clamp-1 md:leading-none leading-none">
							{name}
						</div>
						<div className=" text-sm leading-none">@{slugId}</div>
						<div>
							<span className="text-sm leading-none line-clamp-1">
								{currFollower} followers
							</span>
						</div>
					</div>
				</div>
				<div className="my-2 flex md:mx-6   flex-col">
					
				</div>
				<div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
					<div className=" md:mx-8">
						<div><p className="opacity-75 text-sm ">
						{discription}Discription:- Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Pariatur voluptatum accusantium, temporibus aperiam atque
						optio labore laborum voluptate magnam quod ut, aspernatur blanditiis
						veritatis velit repellendus quas officia commodi nulla?
					</p>
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
					<div className="">
						<MintInfoSection infoData={additionalInfo} />
						
					</div><div>
							<h1>similar projects</h1>
						</div>
				</div>
			</div>
		</Container>
	);
};

export default MintDetailsPage;
