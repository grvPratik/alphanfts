import { Montserrat,Inter } from "next/font/google";
import { Metadata } from "next";



import "@/styles/globals.css";
import "@/styles/swiper.css";

import { cn } from "@/libs/utils";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/config/site";


const roboto = Inter({weight: ["400","500",'600','700','800','900', ], subsets:["latin"]});
const montserrat = Montserrat({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	icons: {
		icon: "/icon-black.png",
		apple: "/icon-black.png",
		shortcut: "/icon-black.png",
	},
	description: siteConfig.description,
	keywords: [
		"NFT calander",
		"trending nfts",
		"Popular NFTs",
		"nft mints",
		"alphanfts",
		"nft alpha group",
		"best crypto nft",
	],

	creator: "pratikgrv",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background text-letter",
					roboto.className
				)}
			>
				{" "}
				<ThemeProvider attribute="class" enableSystem>
					<QueryProvider>{children}</QueryProvider>
				</ThemeProvider>
				
			</body>
		</html>
	);
}
