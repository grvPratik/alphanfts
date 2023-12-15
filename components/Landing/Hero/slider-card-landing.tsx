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
		featured,
		mintDate,
		createdAt,
		x,
		discord,
		website,
	} = data;
	return (
		<div className="w-full mt-8 mb-16 sm:mb-0">
			<div className=" ">
				<div className="flex gap-8 md:flex-row  flex-col-reverse md:py-10">
					<div className="w-full my-auto">
						<div className="flex flex-col gap-4 ">
							<div>
								<CircleAvatar url={imageUrl} />
							</div>
							<div className="flex items-center">
								{!featured && (
									<div className="flex items-center gap-2 bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-0.5 px-2 rounded-full">
										<div className=" text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
											Featured
										</div>
										<div className="flex items-center gap-2">
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
												height="14px"
												width="14px"
												version="1.1"
												id="Layer_1"
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												viewBox="0 0 512 512"
												xmlSpace="preserve"
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
														style={{ fill: "#FFDA44" }}
														d="M276.014,23.866l67.027,135.799l149.825,21.785c18.306,2.662,25.615,25.157,12.369,38.071 L396.825,325.205l25.578,149.24c3.125,18.232-16.012,32.135-32.385,23.528l-134.025-70.452l-134.016,70.452 c-16.374,8.608-35.511-5.294-32.386-23.528l25.58-149.241L6.764,219.521c-13.246-12.912-5.937-35.409,12.369-38.071l149.824-21.787 l67.026-135.798C244.171,7.277,267.827,7.277,276.014,23.866z"
													></path>{" "}
													<path
														style={{ fill: "#FFAA00" }}
														d="M492.867,181.448l-149.825-21.785L276.014,23.866c-4.215-8.541-12.524-12.695-20.718-12.441v416.463 l0.698-0.366l134.025,70.451c16.374,8.607,35.51-5.296,32.386-23.528l-25.578-149.241l108.409-105.685 C518.482,206.605,511.172,184.11,492.867,181.448z"
													></path>{" "}
												</g>
											</svg>
											<span className="relative flex h-3 w-3">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
												<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
											</span>
										</div>
									</div>
								)}
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
							<div className="mt-6 ">
								<Link
									href={`/mints/${slug}`}
									className=" button-20 px-12 py-3"
								>
									View Details
								</Link>
								{/* inline-block rounded-full border text-white border-indigo-600 px-12 py-3 text-sm font-medium text-letter bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 */}
							</div>
						</div>
					</div>
					<div className="w-full  bg-cover">
						<LandingImage
							className="ml-auto flex items-center"
							url={bannerUrl}
							alt={name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingSliderCard;
