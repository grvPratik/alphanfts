import Image from "next/image";
import React from "react";
import Carousel from "./carousel";

const EarlySection = () => {
	return (
		<div className="flex flex-col">
			<div className="head flex justify-between rounded-xl overflow-hidden min-h-0">
				<div>Early</div>
				<div> left arrow right arrow</div>
			</div>
			{/* <div className="flex overflow-y-auto gap-4">
                



















				<div className="card flex flex-col p-8 gap-4 max-w-xs border border-solid border-gray-800 rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
					<div className="flex items-center">
						<div className="relative h-12 w-12">
							<Image fill src={""} alt="" />
						</div>
						<div className=" line-clamp-1 leading-6"> the is title</div>
					</div>
					<div className=" line-clamp-3">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
						a hic repellat inventore aspernatur, cupiditate eaque debitis iusto
						molestiae voluptatum reiciendis sunt itaque necessitatibus aperiam
						in? Maiores amet ratione nulla?
					</div>
					<div> the fuck is here</div>
				</div>
			
			</div> */}

			<div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
				<Carousel />
			</div>
		</div>
	);
};

export default EarlySection;
