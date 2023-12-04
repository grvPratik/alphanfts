import React from "react";

import Nav from "@/components/Header/nav";
import NavMobile from "@/components/Header/nav-mobile";
import Footer from "@/components/Footer/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col bg-background scroll-smooth">
			<Nav />
			<NavMobile />
			{children}
			<Footer />
		</main>
	);
};

export default RootLayout;
