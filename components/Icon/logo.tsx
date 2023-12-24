import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href={'/'}>
		<div className="flex items-center justify-center h-9 w-9 overflow-hidden p-1 bg-black  rounded-lg">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1080 1080"
				className="currentColor rounded-3xl cursor-pointer"
			>
				<rect
					width="1080"
					height="1080"
					x="-540"
					y="-540"
					fill="#030303"
					rx="0"
					ry="0"
					transform="translate(540 540)"
					vectorEffect="non-scaling-stroke"
				></rect>
				<g transform="matrix(8.44 0 0 8.44 559.87 574.06)">
					<path
						fill="#FFF"
						d="M37.76 78a15.81 15.81 0 0014.81-10.37l1.61-4.43 2.43 7.3A11 11 0 0078 67v-9h-8v9a3 3 0 01-5.79.94L58.58 51.1 69.17 22h-8.52l-6.14 16.89-2.07-6.2A15.62 15.62 0 0022 37.62v24.62c.011 8.7 7.06 15.749 15.76 15.76zM30 37.62a7.62 7.62 0 0114.85-2.41L50.11 51l-5.06 13.89A7.76 7.76 0 0130 62.24z"
						transform="matrix(1.74 0 0 1.74 -2.55 -4.85) translate(-50 -50)"
						vectorEffect="non-scaling-stroke"
					></path>
					<rect
						width="95.481"
						height="95.481"
						x="-47.74"
						y="-47.74"
						fill="none"
						rx="0"
						ry="0"
						transform="matrix(1.02 0 0 1.02 -2.55 -4.85)"
						vectorEffect="non-scaling-stroke"
					></rect>
				</g>
			</svg>
		</div></Link>
	);
};

export default Logo;
