"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchData from "../search-data";
import { XMarkIcon } from "@heroicons/react/20/solid";
import MobNavMenu from "./mob-nav-menu";

const NavMobile = () => {
	const [mobSearchToggle, setMobSearchToggle] = useState(false);
	const [mobMenuToggle, setMobMenuToggle] = useState(false);


	const handleMenuOpen = () => {
		setMobMenuToggle(true);
	};
	const handleSearchClose = () => {
		setMobSearchToggle(false);
	};
	const handleSearchOpen = () => {
		setMobSearchToggle(true);
	};
	return (
		<div className="sticky top-0 z-50 overflow-x-hidden w-full md:hidden bg-header backdrop-blur-md">
			<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
				<div className="flex  items-center my-4">
					<div onClick={handleMenuOpen} className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-7 h-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
					</div>
					<div className="  uppercase mx-2 ">name</div>

					<div onClick={handleSearchOpen} className="ml-auto mx-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-7 h-7 p-[4px]"
						>
							<path
								fillRule="evenodd"
								d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<Link
						href="/rewards"
						className=" text-base font-medium  bg-violet-600 text-background transition-colors  p-2 px-5  rounded-2xl"
					>
						rewards
					</Link>
				</div>
			</div>
			{mobSearchToggle && (
				<div className="fixed w-full left-0 top-0 md:hidden bg-header backdrop-blur-lg p-3   flex">
					<div className="flex-1">
						<SearchData />
					</div>
					<div
						onClick={handleSearchClose}
						className="flex items-center  bg-input mx-3 rounded justify-center"
					>
						<XMarkIcon className="w-9 h-9 p-1 mx-2" />
					</div>
				</div>
			)}
			<MobNavMenu isOpen={mobMenuToggle} setIsOpen={setMobMenuToggle} />
		</div>
	);
};

export default NavMobile;
