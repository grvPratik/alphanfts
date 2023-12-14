import React from "react";

import Nav from "@/components/Header/nav";
import NavMobile from "@/components/Header/nav-mobile";
import Footer from "@/components/Footer/footer";


const MintLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Nav />
			<NavMobile />
			{children}
			<Footer/>
		</main>
	);
};

export default MintLayout;
