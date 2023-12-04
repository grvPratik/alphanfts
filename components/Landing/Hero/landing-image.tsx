import { cn } from "@/libs/utils";
import Image from "next/image";
import React from "react";

interface LandingImgPros {
	url: string;
	className: string;
}

const LandingImage = ({ url, className }: LandingImgPros) => {
	return (
		<div
			className={cn(
				"relative aspect-[16/12] max-w-[36rem] rounded-[2rem] overflow-hidden bg-center",
				className
			)}
		>
			<Image
				src={url}
				className="object-cover object-center"
				fill
				priority
				alt=""
			/>
		</div>
	);
};

export default LandingImage;
