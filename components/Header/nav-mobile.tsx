"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchData from "../search-data";
import { XMarkIcon } from "@heroicons/react/20/solid";
import MobNavMenu from "./mob-nav-menu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
		<>
			<div className="sticky top-0 z-50  w-full md:hidden bg-background backdrop-blur-md">
				<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
					<div className="flex  items-center py-2">
						<div
							onClick={handleMenuOpen}
							className="p-1 rounded-full border border-solid  border-border "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 p-[2px] opacity-70"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 9h16.5m-16.5 6.75h16.5"
								/>
							</svg>
						</div>

						<div
							onClick={handleSearchOpen}
							className="ml-auto  p-1 rounded-full border border-solid  border-border "
						>
							{/* {closeIcon({  })} */}
							<MagnifyingGlassIcon className= "w-6 h-6 p-[4px]"/>
						</div>
					</div>
				</div>
				{mobSearchToggle && (
					<div className="fixed w-full left-0 top-0 items-center  md:hidden bg-background backdrop-blur-lg flex px-2 py-1">
						<div className="flex-1">
							<SearchData />
						</div>
						<div
							onClick={handleSearchClose}
							className="flex items-center h-8 w-8 border border-solid  border-border  mx-2 rounded-full overflow-hidden justify-center"
						>
							<XMarkIcon className=" opacity-70 p-1" />
						</div>
					</div>
				)}
				<MobNavMenu isOpen={mobMenuToggle} setIsOpen={setMobMenuToggle} />
			</div>
		</>
	);
};

export default NavMobile;

function closeIcon(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
