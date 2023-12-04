import Image from "next/image";
import React from "react";

const CircleAvatar = ({ url }: { url: string }) => {
	
	return (
		<div className="relative aspect-square w-[5rem] md:w-[6rem] rounded-full ">
			<Image
				className="absolute rounded-full object-cover overflow-hidden"
				src={url}
				priority
				fill
				alt=""
			/>
			{/* <span className="top-0 left-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full  -rotate-45">
				trending
			</span> */}
		</div>
	);
};

export default CircleAvatar;
