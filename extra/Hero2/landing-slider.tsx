import Image from "next/image";
import React from "react";
import SliderAvatar from "./slider-avatar";
import Balancer from "react-wrap-balancer";

const LandingSlider = () => {
	return (
		<div className="">
			<div className="relative h-[36rem] overflow-hidden rounded-2xl   ">
				<Image
					className="absolute object-cover "
					src={
						"https://images.unsplash.com/photo-1491146179969-d674118945ff?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt=""
					fill
				/>
				<div className="pointer-events-none backdrop-blur absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-70"></div>
				<div className="z-10 absolute top-0 left-0 h-full w-full flex flex-col justify-between">
					<div className="flex  flex-col relative items-center justify-center flex-1 text-white">
						{" "}
						<SliderAvatar
							alt=""
							size="w-[4.5rem]"
							src="https://images.unsplash.com/photo-1491146179969-d674118945ff?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<div className="m-2 flex flex-col gap-1">
							<div className="text-center">@slug name</div>
							<div className="text-3xl font-bold tracking-tight">
								<Balancer> heading mae</Balancer>
							</div>
						</div>
					</div>
					<div className="flex mx-auto my-6">
						<div className="flex  lg:gap-14 text-white mx-4 flex-row  gap-10">
							<div className="md:flex flex-col md:flex-row gap-10">
								<div className="flex flex-col m-5">
									<div className="  md:text-2xl text-base font-bold text-center ">
										{" "}
										2 SOL
									</div>
									<div className="text-center md:font-medium text-xs md:text-sm ">
										Mint price
									</div>
								</div>
								<div className="flex flex-col m-5">
									<div className="  md:text-2xl text-base font-bold text-center">
										2000
									</div>
									<div className="text-center md:font-medium text-xs md:text-sm ">
										Supply
									</div>
								</div>
							</div>
							<div className="md:flex flex-col md:flex-row gap-10">
								<div className="flex flex-col m-5">
									<div className="  md:text-2xl  text-base font-bold text-center">
										12 sep 2023
									</div>
									<div className="text-center md:font-medium text-xs md:text-sm  ">
										Mint Date
									</div>
								</div>
								<div className="flex flex-col m-5">
									<div className="  md:text-2xl  text-base font-bold text-center">
										Solana
									</div>
									<div className="text-center md:font-medium text-xs md:text-sm ">
										network
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingSlider;
