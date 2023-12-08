import React from "react";

import SearchInput from "@/components/search-input";
import { MainNav } from "@/components/Header/nav-links";
import Link from "next/link";
import SearchData from "../search-data";

const Nav = () => {
	return (
		<header className="sticky top-0 z-50  w-full hidden md:block bg-header backdrop-blur-xl ">
			<div className="">
				<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10">
					<div className="flex items-center py-4 justify-between">
						<div className="gap-8 flex-1 relative grid grid-cols-5">
							<span className=" font-bold col-span-1 text-lg flex items-center">
								<div className="flex items-center justify-center h-10 w-10 overflow-hidden">
									<svg
										version="1.0"
										xmlns="http://www.w3.org/2000/svg"
										width="32px"
										height="32px"
										viewBox="0 0 128.000000 128.000000"
										preserveAspectRatio="xMidYMid meet"
									>
										<g
											transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
											fill="currentColor"
											stroke="none"
										>
											<path
												d="M457 1126 c-112 -46 -202 -128 -261 -236 -46 -86 -66 -166 -66 -270
0 -202 99 -396 241 -472 37 -19 59 -23 134 -23 75 0 99 5 140 25 58 28 165
131 184 178 7 18 17 32 21 32 4 0 10 -26 14 -57 14 -120 82 -182 197 -183 96
0 138 60 51 73 -77 13 -116 69 -126 183 -20 221 -19 251 23 414 45 180 67 300
58 323 -12 32 -111 14 -121 -22 -3 -9 -12 -56 -20 -105 -9 -49 -17 -90 -18
-92 -2 -1 -16 22 -32 52 -68 130 -175 204 -295 204 -46 0 -83 -8 -124 -24z
m254 -52 c28 -14 85 -76 142 -154 18 -25 40 -46 50 -48 23 -5 54 50 63 112 9
73 21 98 42 94 13 -3 16 -11 14 -38 -5 -47 -47 -237 -73 -323 -19 -65 -20 -79
-10 -231 12 -184 21 -221 69 -276 30 -36 31 -40 13 -40 -58 0 -99 46 -120 135
-23 95 -49 98 -122 15 -29 -33 -53 -59 -55 -57 -2 1 23 54 54 117 64 127 92
206 92 255 0 54 -38 185 -77 264 -23 47 -59 97 -95 134 -32 33 -58 61 -58 64
0 6 39 -6 71 -23z m-116 -10 c70 -33 166 -160 197 -259 46 -148 47 -190 4
-296 -93 -230 -183 -331 -278 -310 -84 19 -156 90 -207 202 -91 202 -59 439
79 592 45 51 106 86 148 87 13 0 39 -7 57 -16z m-310 -156 c-53 -111 -68 -186
-63 -298 9 -158 66 -288 169 -385 28 -26 48 -49 45 -52 -11 -11 -97 41 -135
82 -138 150 -172 416 -76 605 21 42 80 120 91 120 1 0 -12 -33 -31 -72z"
											/>
										</g>
									</svg>
								</div>
							</span>
							<div className=" col-span-4">
								<SearchData />
							</div>
						</div>
						<div className="flex-1 items-center justify-end flex relative">
							<MainNav />
						</div>

						<div className=" flex justify-end">
							<Link
								href={"/"}
								className="button-20 cursor-not-allowed px-4 py-2"
							>
								Rewards
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
