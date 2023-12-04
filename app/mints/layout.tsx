import React from "react";

import Nav from "@/components/Header/nav";
import NavMobile from "@/components/Header/nav-mobile";


const MintLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Nav />
			<NavMobile />
			{children}
		</main>
	);
};

export default MintLayout;
