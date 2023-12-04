import React from "react";
import LandingSlider from "@/extra/Hero2/landing-slider";

const SliderContainerBox = () => {
	return (
		<div className="flex flex-col">
			<div className="text-3xl font-bold tracking-tight my-4">
				Featured Projects
			</div>
			<LandingSlider />
		</div>
	);
};

export default SliderContainerBox;
