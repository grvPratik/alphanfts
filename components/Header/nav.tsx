import React from "react";

import SearchInput from "@/components/search-input";
import { MainNav } from "@/components/Header/nav-links";
import Link from "next/link";
import SearchData from "../search-data";
import Logo from "../Icon/logo";

const Nav = () => {
	return (
		<header className="sticky top-0 z-50  w-full hidden md:block bg-background ">
			<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10">
				<div className="flex items-center py-3 justify-between">
					<div className="gap-8 flex-1 relative flex  items-center">
						<span className=" font-bold  text-lg flex items-center">
							<div className="flex items-center gap-2">
								<Logo /><span className="hidden md:block text-lg">Alphanfts</span>
							</div>
						</span>
						<div className="  items-center">
							<MainNav />
						</div>
					</div>
					<div className="flex-1 items-center justify-end my-auto ">
						<SearchData />
					</div>

					<div className=" flex justify-end">
						<Link
							href={"/"}
							className=" bg-black text-white dark:bg-white dark:text-black rounded-lg cursor-not-allowed px-4 py-2"
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
