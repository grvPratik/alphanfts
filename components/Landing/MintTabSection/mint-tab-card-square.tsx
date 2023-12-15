import Image from "next/image";
import React from "react";
import { formatBlockchian, formatDate, supplyCheck } from "@/libs/utils";
import { CollectionProps } from "@/types/site.type";
import Link from "next/link";
import SliderAvatar from "@/components/ui/slider-avatar";

const CollectionCard = ({ data }: { data: CollectionProps }) => {
	const {
		slug,
		name,
		imageUrl,
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
		x,
		discord,
		website,
	} = data;
	return (
		<Link href={`/mints/${slug}`}>
			<div className="relative w-full bn5">
				<div className="relative w-full aspect-[14/11]  rounded-lg overflow-hidden max-w-[28rem] text-white cursor-pointer mx-auto bg-cover ">
					<Image
						sizes="100%"
						fill
						src={bannerUrl}
						alt={name}
						
						className="absolute object-cover  bg-cover"
					/>
					<div className="pointer-events-none  absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent "></div>
					<div className="w-full  flex flex-col justify-between absolute inset-0 p-4">
						<div className="flex flex-col items-center">
							<SliderAvatar src={imageUrl} alt={name} size={"w-[3.5rem]"} />
							<div className=" text-center font-bold md:text-lg ">{name}</div>
							<div className=" text-center  font-light  text-xs ">@{slug}</div>
						</div>
						<div className="grid grid-cols-4  text-xs gap-2 ">
							<div className=" flex items-center flex-col  justify-end">
								<span className="   ">{formatBlockchian(blockchain)}</span>
								<span className=" text-xs ">blockchain</span>
							</div>
							<div className=" flex items-center flex-col tracking-tighter justify-end">
								<span className=" text-center ">{formatDate(mintDate)}</span>
								<span className=" text-xs ">Mint Date</span>
							</div>
							<div className=" flex items-center flex-col   justify-end">
								<span className="  ">{supplyCheck(supply)}</span>
								<span className=" text-xs ">Supply</span>
							</div>
							<div className=" flex items-center flex-col   justify-end">
								<span className=" ">{mintPrice}</span>
								<span className=" text-center text-xs ">Mint Price</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CollectionCard;
