import React from "react";
import FeaturedCard from "@/extra/FeaturedSection/featured-card";

const FeaturedContainer = () => {
	return (
		<div>
			<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
				<div className="flex flex-col gap-3 ">
					<div className="md:text-5xl text-3xl font-bold tracking-tight mx-auto my-3">
						{" "}
						{/* Featured */}
					</div>
					<div className="flex">
						<div className="flex-1">
							<FeaturedCard />
						</div>
						<div className="flex-1">
							<FeaturedCard />
						</div>
						<div className="flex-1">
							<FeaturedCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedContainer;
