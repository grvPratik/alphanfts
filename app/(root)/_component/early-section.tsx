"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Carousel from "./carousel";

const EarlySection = () => {
	const carouselContainer = useRef();
	const navigation = (dir: any) => {
		const container: any = carouselContainer.current;
		console.log(container);
		console.log("container.offsetWidth", container.offsetWidth);

		console.log(container.scrollLeft, "container.scrollLeft");
		
		
		const scrollAmount =
			dir === "left"
				? container.scrollLeft - (container.offsetWidth + 20)
				: container.scrollLeft + (container.offsetWidth + 20);
		console.log(scrollAmount, "scrollAmount");

		
		container.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};
	return (
		<div className="flex flex-col">
			<div className="head flex justify-between rounded-xl min-h-0">
				<div>Early</div>
				<div>
					{" "}
					<div className=" cursor-pointer" onClick={() => navigation("left")}>
						left arrow
					</div>
					<div className=" cursor-pointer" onClick={() => navigation("right")}>
						right arrow
					</div>
				</div>
			</div>
			<div className=" overflow-y-auto">
				<div ref={carouselContainer} className="flex  gap-4 overflow-y-hidden">
					<div className="card relative flex flex-col p-8 gap-4 max-w-xs border border-solid dark:border-gray-800 rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
						{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
						<div className="flex items-center gap-2">
							<div className="relative h-12 w-12 rounded-lg overflow-hidden">
								<Image
									fill
									src={
										"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
									}
									alt=""
								/>
							</div>
							<div className=" line-clamp-1 leading-6 font-semibold text-lg dark:text-white/80">
								{" "}
								The is title
							</div>
						</div>
						<div className=" line-clamp-3 dark:text-white/50">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto a hic repellat inventore aspernatur, cupiditate eaque
							debitis iusto molestiae voluptatum reiciendis sunt itaque
							necessitatibus aperiam in? Maiores amet ratione nulla?
						</div>
						<div> the fuck is here</div>
					</div>
					<div className="card relative flex flex-col p-8 gap-4 max-w-xs border border-solid dark:border-gray-800 rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
						{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
						<div className="flex items-center gap-2">
							<div className="relative h-12 w-12 rounded-lg overflow-hidden">
								<Image
									fill
									src={
										"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
									}
									alt=""
								/>
							</div>
							<div className=" line-clamp-1 leading-6 font-semibold text-lg dark:text-white/80">
								{" "}
								The is title
							</div>
						</div>
						<div className=" line-clamp-3 dark:text-white/50">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto a hic repellat inventore aspernatur, cupiditate eaque
							debitis iusto molestiae voluptatum reiciendis sunt itaque
							necessitatibus aperiam in? Maiores amet ratione nulla?
						</div>
						<div> the fuck is here</div>
					</div>
					<div className="card relative flex flex-col p-8 gap-4 max-w-xs border border-solid dark:border-gray-800 rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
						{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
						<div className="flex items-center gap-2">
							<div className="relative h-12 w-12 rounded-lg overflow-hidden">
								<Image
									fill
									src={
										"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
									}
									alt=""
								/>
							</div>
							<div className=" line-clamp-1 leading-6 font-semibold text-lg dark:text-white/80">
								{" "}
								The is title
							</div>
						</div>
						<div className=" line-clamp-3 dark:text-white/50">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto a hic repellat inventore aspernatur, cupiditate eaque
							debitis iusto molestiae voluptatum reiciendis sunt itaque
							necessitatibus aperiam in? Maiores amet ratione nulla?
						</div>
						<div> the fuck is here</div>
					</div>
					<div className="card relative flex flex-col p-8 gap-4 max-w-xs border border-solid dark:border-gray-800 rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
						{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
						<div className="flex items-center gap-2">
							<div className="relative h-12 w-12 rounded-lg overflow-hidden">
								<Image
									fill
									src={
										"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
									}
									alt=""
								/>
							</div>
							<div className=" line-clamp-1 leading-6 font-semibold text-lg dark:text-white/80">
								{" "}
								The is title
							</div>
						</div>
						<div className=" line-clamp-3 dark:text-white/50">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto a hic repellat inventore aspernatur, cupiditate eaque
							debitis iusto molestiae voluptatum reiciendis sunt itaque
							necessitatibus aperiam in? Maiores amet ratione nulla?
						</div>
						<div> the fuck is here</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarlySection;
