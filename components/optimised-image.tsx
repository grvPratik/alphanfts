"use client";
import React, { useState } from "react";
import Image from "next/image";

import { OptimizedImageProps } from "@/types/site.type";
import { cn } from "@/libs/utils";


const OptImage = ({ src, alt,className }:OptimizedImageProps) => {
	const [imageSrc, setImageSrc] = useState(src);

    const errorImg = "/alphanftslogo.png";
	return (
		<div>
			<div className={cn("relative ",className)}>
				<Image
					src={imageSrc}
					alt={alt}
					
					// placeholder="blur"
					// blurDataURL="/alphanftslogo.png"
					onError={() => setImageSrc(errorImg)}
					sizes="100%"
					fill
					className=" object-cover"
				/>
			</div>
		</div>
	);
};

export default OptImage;
