import React from "react";

import CircleAvatar from "@/components/Landing/Hero/circle-avatar";
import LandingImage from "./landing-image";

import { formatDate, supplyCheck } from "@/libs/utils";
import { CollectionProps } from "@/types/site.type";
import Link from "next/link";

const LandingSliderCard = ({ data }: { data: CollectionProps }) => {
	const {
		slug,
		name,
		imageUrl,
		description,
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
		<div className="w-full mt-8 mb-16 sm:mb-0">
			<div className=" mx-6 sm:mx-8 md:mx-10 lg:mx-16 ">
				<div className="flex gap-8 md:flex-row  flex-col-reverse md:py-10">
					<div className="w-full my-auto">
						<div className="flex flex-col gap-4 ">
							<div>
								<CircleAvatar url={imageUrl} />
							</div>
							<div className="flex items-center">
								<div className="flex items-center gap-2 bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-0.5 px-2 rounded-full">
									<a
										className="   text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"
										href="#"
									>
										Minting
									</a>
									<div className="flex items-center">
										<svg
											fill="currentColor"
											width="18px"
											height="18px"
											viewBox="0 0 32 32"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												{" "}
												<title></title>{" "}
												<g data-name="Layer 97" id="Layer_97">
													{" "}
													<path d="M16,30A10,10,0,0,1,6,20C6,17,7.93,5.33,8,4.84a1,1,0,0,1,1.92-.21l2.85,7.13,2.25-9a1,1,0,0,1,1.94,0l2.25,9,2.85-7.13A1,1,0,0,1,24,4.84C24.07,5.33,26,17,26,20A10,10,0,0,1,16,30ZM9.42,8.73C8.83,12.49,8,18.13,8,20a8,8,0,0,0,16,0c0-1.87-.83-7.51-1.42-11.27l-2.65,6.64a1,1,0,0,1-1,.63,1,1,0,0,1-.9-.76L16,7.12l-2,8.12a1,1,0,0,1-.9.76,1,1,0,0,1-1-.63Z"></path>{" "}
													<path d="M20.94,21.35a1,1,0,0,0-1.48-.75A2.9,2.9,0,0,1,18,21a3,3,0,0,1-3-2.61,1,1,0,0,0-.54-.76,1,1,0,0,0-.94,0A5,5,0,1,0,21,22,4.46,4.46,0,0,0,20.94,21.35Z"></path>{" "}
													<path d="M24.51,22.91,24,19.23c0,2.25-4.15,6.12-8,6.12s-8.35-5.22-7.91-6.9L7,19.21c0,.3,0,.57,0,.79a9,9,0,0,0,17.51,2.91Z"></path>{" "}
												</g>{" "}
											</g>
										</svg>
										<svg
											width="21px"
											height="21px"
											viewBox="0 0 64 64"
											xmlns="http://www.w3.org/2000/svg"
											fill="#000000"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												{" "}
												<path
													d="m12.58 15.71c-.25-.12-.5-2.29-.88-2.33s-.95 2-.95 2-1.92.17-2 .54 1.71 1.21 1.71 1.33-1.05 1.13-.75 1.55 1.7-.46 1.87-.46 1.67 1.46 2 1.29-.46-2-.5-2.13 1.37-1 1.37-1.25-1.62-.41-1.87-.54zm8-5.33c.17-1.25-.65-2.58-2.08-2.29-1.88.37-2.38 2.29-1.55 3.08s3.46.46 3.63-.79zm34.62.25c.17-1.25-.64-2.58-2.08-2.29-1.87.37-2.37 2.29-1.54 3.08s3.42.46 3.62-.79zm-16.9 17.72a1.85 1.85 0 0 0 1.7-2.55c-.8-1.74-2.78-1.78-3.36-.79s.36 3.47 1.66 3.34zm-2.46 8.16c-1.91.13-2.65 2-1.92 2.86s3.37.89 3.7-.32a1.86 1.86 0 0 0 -1.78-2.54zm-25.35 16.32c-.85 1.72.36 3.28 1.5 3.11s2.47-2.46 1.58-3.36a1.85 1.85 0 0 0 -3.08.25zm32.84-33.7c.12.17 1.58-1.29 1.79-1.46s1.58.63 1.83.46-.5-1.75-.58-1.92 1.13-1.12 1.13-1.41-1.63-.17-1.8-.34-1-2.54-1.41-2.5-.69 3.36-.79 3.42c-.38.21-2.3 1.25-2.21 1.5s1.71.29 1.83.38.08 1.74.21 1.87zm-12.5 14.79c1-1 0-8 0-8.12s5.54-6 5-6.84-6.58-1.37-6.79-1.5-1.88-6.62-3-6.62-4.42 6.79-4.58 7c0 0-5.05-.71-5.55.12s3.92 6 3.92 6-3.83 7.34-2.75 8.63 6.83-2.67 7.42-2.5 5.29 4.79 6.33 3.83zm-19.83 10.25c.13-.12 1.38.75 1.67.54s-.21-1.45-.21-1.58 1.38-.92 1.29-1.12-1.79-.38-1.79-.38-.75-2.42-1.08-2.42-1 2-1 2.17c0 0-1.71.17-1.71.5s1.46.75 1.46.92-.38 2.12-.38 2.12a2.73 2.73 0 0 0 .67.29c.24.09.91-.91 1.08-1.04zm23.42.71c-.21-.71-4.25-1-4.25-1s-1.21-4.62-2.42-4.54-3.45 4.42-3.62 4.83c0 0-4.42-.29-4.75.54s4 4.25 4 4.59-2.13 4.75-1.38 5.54 4.71-2.46 5.09-2.5 5 2.08 5.75 1.42-1.59-4.46-1.55-4.76 3.29-3.41 3.08-4.12zm21.49-14.08c-.21-.88-6-1.38-6-1.38s-2-4.21-3.2-4.12-3.71 4.62-3.84 4.79c0 0-5.33 1.37-5.33 2.29s4.08 3.62 4.08 3.62-.62 6.46.38 7 5.5-3.83 5.71-3.83 5.88 3.29 6.17 3-.71-6-.75-6.13 2.99-4.37 2.78-5.24zm-15 18.66a8.83 8.83 0 0 0 -1.16 2.59s-2 1-2 1.21 1.79.37 1.83.62-.37 1.54-.12 1.83 1.2-.87 1.41-1 1.59.8 1.79.67-.37-1.54-.37-1.71 1.83-1.08 1.71-1.37-2-.29-2.13-.38-.58-2.66-.96-2.46z"
													fill="#1d1d1b"
												></path>{" "}
												<path
													d="m18.54 9c.71-.14 1.11.51 1 1.13s-1.38.78-1.79.39-.14-1.37.79-1.52z"
													fill="#ffe19b"
												></path>{" "}
												<path
													d="m53.16 9.22a.91.91 0 0 1 1 1.13c-.08.62-1.38.78-1.79.39s-.13-1.34.79-1.52z"
													fill="#ffe19b"
												></path>{" "}
												<path
													d="m39.2 26a.93.93 0 0 1 -.86 1.27c-.62.06-1.09-1.16-.8-1.66s1.26-.43 1.66.39z"
													fill="#cbe7f5"
												></path>{" "}
												<path
													d="m35.77 37.39a.91.91 0 0 1 .88 1.25c-.16.6-1.47.6-1.83.16s.01-1.35.95-1.41z"
													fill="#cbe7f5"
												></path>{" "}
												<path
													d="m11.21 53.34a.91.91 0 0 1 1.52-.13c.44.44-.22 1.57-.78 1.66s-1.16-.69-.74-1.53z"
													fill="#ffe19b"
												></path>{" "}
												<path
													d="m19 19c.11-.4 2.54.38 3.29.17s1.37-1.42 1.67-2 1.54-3.17 1.83-3.17 1.54 4.75 2 5.08 5.62 1 5.67 1.17-4.26 4.55-4.3 4.75.25 6.41.09 6.33-3.38-3-4.55-3.08-5.37 2.45-5.5 2.16 3-6.71 2.84-7-3.04-4.15-3.04-4.41z"
													fill="#ffe19b"
												></path>{" "}
												<g fill="#1d1d1b">
													{" "}
													<path d="m22.87 20.59c0-.13 1.42-2 1.71-1.79s.46.46.29.71a9.25 9.25 0 0 1 -1.33 1.58c-.17 0-.71-.29-.67-.5z"></path>{" "}
													<path d="m24.79 23.34a23.13 23.13 0 0 1 2.12 3c-.08.21-.16.37-.29.37a20.91 20.91 0 0 1 -2.46-2.83c-.04-.25.5-.29.63-.54z"></path>{" "}
													<path d="m25.2 22.59c-.06-.12.42-.38.67-.33a9.39 9.39 0 0 1 1.79 2.29 1.28 1.28 0 0 1 -.25.54s-2.04-2.21-2.21-2.5z"></path>{" "}
													<path d="m26.79 21.3c-.08-.11.58-.46.79-.38s1.17 1.34 1.08 1.63-.16.46-.37.5-1.38-1.59-1.5-1.75z"></path>{" "}
												</g>{" "}
												<path
													d="m23 45.84c.06-.2 2 .12 2.16-.08s2-3.59 2.21-3.55 1.21 3.21 1.33 3.25 2.8.25 2.84.55-2.25 2.54-2.17 2.87a15.72 15.72 0 0 1 .83 2.5c-.16 0-3-1.25-3.29-1.08a6.56 6.56 0 0 1 -2 .66c-.12-.12.54-2.62.5-2.83s-2.41-2.13-2.41-2.29z"
													fill="#f2910d"
												></path>{" "}
												<path
													d="m26.75 46.8a5.36 5.36 0 0 1 1.33 1.91c0 .25-.21.55-.33.46a15.67 15.67 0 0 1 -1.55-2c0-.08.42-.29.55-.37z"
													fill="#1d1d1b"
												></path>{" "}
												<path
													d="m27.79 45.76a5.24 5.24 0 0 1 1.33 1.91c0 .25-.21.54-.33.46a15.58 15.58 0 0 1 -1.54-2c0-.08.41-.29.54-.37z"
													fill="#1d1d1b"
												></path>{" "}
												<path
													d="m40.62 32.67c-.26-.26 3.42-.83 3.58-1.08s2.25-3.54 2.5-3.5 1.71 3.12 1.92 3.17 5 .41 5 .66-2.5 3.84-2.5 4.09a17.54 17.54 0 0 1 .21 2.75 33.74 33.74 0 0 1 -3-1.92 2.13 2.13 0 0 0 .08-.63 14 14 0 0 0 -2-2.16c-.16 0-.66.33-.5.46a11 11 0 0 1 1.5 2.25c-.08.12-3.71 3.5-3.91 3.2s.58-4.66.41-5-3.04-2.04-3.29-2.29z"
													fill="#fab900"
												></path>{" "}
												<path
													d="m47.54 33.46s.54-.41.71-.33a14.35 14.35 0 0 1 1.75 3.08c-.09.25-.63.42-.63.42s-1.67-3.08-1.83-3.17z"
													fill="#1d1d1b"
												></path>{" "}
												<path
													d="m49.62 32.84c-.08-.24.5-.17.67 0s.71 1.29.54 1.42-.5.5-.58.37-.55-1.54-.63-1.79z"
													fill="#1d1d1b"
												></path>{" "}
											</g>
										</svg>
										<span className="relative flex h-3 w-3">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
											<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
										</span>
									</div>
								</div>
							</div>
							<div className="md:text-3xl text-xl  font-bold tracking-tight">
								{name} {}
							</div>
							<p className="text-sm text-muted-foreground">{description}</p>
							{/* <div className="text-5xl font-bold tracking-tight">
								<Balancer>
									{description}
								</Balancer>
							</div> */}
							<div className="flex gap-3 flex-col-reverse md:flex-row md:gap-9 antialiased text-sm leading-normal text-blue-gray-900 font-normal opacity-70 flex-wrap">
								<span className="flex gap-2">
									<span>{supplyCheck(supply)}</span>
									<span className="h-1 w-1 relative rounded-full bg-gray-500  m-auto "></span>{" "}
									<span>Supply</span>
								</span>
								<span className="flex gap-2">
									<span>{blockchain}</span>
									<span className="h-1 w-1 relative rounded-full bg-gray-500  m-auto"></span>
									<span>Metwork</span>
								</span>
								<span className="flex gap-2">
									<span>{formatDate(mintDate)}</span>
									<span className="h-1 w-1 relative rounded-full bg-gray-500  m-auto"></span>
									<span>Mint date</span>
								</span>
							</div>
							<div className="">
								<Link
									href="#"
									className="mt-4 inline-block rounded-full border text-white border-indigo-600 px-12 py-3 text-sm font-medium text-letter bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
								>
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full  bg-cover">
						<LandingImage
							className="ml-auto flex items-center"
							url={bannerUrl}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingSliderCard;
