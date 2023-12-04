import Image from "next/image";
import React from "react";
import SliderAvatar from "@/extra/Hero2/slider-avatar";
import { CollectionProps } from "@/types/site.type";

const FeaturedCard = ({ data }: { data: CollectionProps }) => {
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
		<div className="w-full">
			<div className="relative text-white aspect-[16/7] min-w-0 min-h-0 lg:min-w-fit rounded-xl overflow-hidden z-0">
				<Image
					className="absolute w-full h-full"
					src={bannerUrl}
					alt={name}
					fill
					priority
				/>
				<div className="pointer-events-none backdrop-blur absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
				<div className="absolute w-full h-full z-50 md:p-2 p-1 grid grid-rows-3 grid-cols-1">
					<div className="items-center gap-3 flex px-4 overflow-hidden">
						<div className="relative h-10 w-10 aspect-square overflow-hidden rounded">
							<Image
								className="absolute object-center object-cover w-full h-full"
								src={imageUrl}
								fill
								alt={name}
							/>
						</div>

						<div className="flex flex-col">
							<span className="text-[28px] font-semibold leading-none">
								{name}
							</span>
							<span className="text-xs font-light">@{slug}</span>
						</div>
					</div>
					<div className="items-center flex">
						<div className="flex flex-col px-4">
							<span className="text-lg font-semibold leading-none">
								{mintPrice}SOL
							</span>
							<span className="text-xs font-normal ">mint price</span>
						</div>
					</div>
					<div className="items-center flex px-4">{blockchain}</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
