import React from "react";

import SearchInput from "@/components/search-input";
import { MainNav } from "@/components/Header/nav-links";
import Link from "next/link";
import SearchData from "../search-data";
import Logo from "../Icon/logo";

const Nav = () => {
	return (
		<header className="sticky top-0 z-50  w-full hidden md:block bg-header backdrop-blur-xl ">
			
				<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10">
					<div className="flex items-center py-3 justify-between">
						<div className="gap-8 flex-1 relative grid grid-cols-5">
							<span className=" font-bold col-span-1 text-lg flex items-center">
								<div className="">
									<Logo />
								</div>
							</span>
							<div className=" col-span-4">
								<SearchData />
							</div>
						</div>
						<div className="flex-1 items-center justify-end flex relative">
							<MainNav />
						</div>

						<div className=" flex justify-end">
							<Link
								href={"/"}
								className="button-20 cursor-not-allowed px-4 py-2"
							>
								Rewards
							</Link>
						</div>
					</div>
				</div>
			
		</header>
	);
};

export default Nav;
