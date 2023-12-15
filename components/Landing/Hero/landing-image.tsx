import { cn } from "@/libs/utils";
import Image from "next/image";
import React from "react";

interface LandingImgPros {
	url: string;
	className: string;
	alt: string
}

const LandingImage = ({ url, className,alt }: LandingImgPros) => {
	return (
		<div
			className={cn(
				"relative aspect-[16/12] max-w-[36rem] rounded-[2rem] overflow-hidden bg-center",
				className
			)}
		>
			<Image
				src={url}
				style={{ objectFit: "cover" }}
				sizes="100%"
				fill
				alt={alt}
			/>
		</div>
	);
};

export default LandingImage;
