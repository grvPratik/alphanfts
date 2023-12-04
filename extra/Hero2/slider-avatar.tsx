import { cn } from "@/libs/utils";
import Image from "next/image";
import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
	size: string;
}

const SliderAvatar = ({ size, alt, src }: AvatarProps) => {
	return (
		<div className="p-1.5 backdrop-blur rounded-lg bg-header">
			<div
				className={cn("relative  aspect-square overflow-hidden rounded ", size)}
			>
				<Image
					className="absolute object-center object-cover"
					src={src}
					fill
					alt={alt}
				/>
			</div>
		</div>
	);
};

export default SliderAvatar;
