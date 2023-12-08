"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Balancer from "react-wrap-balancer";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


import LandingSliderCard from "./slider-card-landing";
import { CollectionProps } from "@/types/site.type";

interface RawDataProps{
	success: boolean,
	total: number,
	result:CollectionProps[]
}
interface SliderContainerProps{
	data:RawDataProps
}
const SliderContainer = ({ data }: SliderContainerProps) => {
	const sliderData = data?.result;
	
	return (
		<div>
			<Swiper
				spaceBetween={16}
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				loop
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
					// pauseOnMouseEnter: true,
				}}
				pagination={{ clickable: true }}
				
			>
				{sliderData.map((item: any, index: number) => (
					<SwiperSlide key={item._id}>
						<LandingSliderCard data={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SliderContainer;
