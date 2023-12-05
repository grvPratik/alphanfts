import { Roboto_Mono, Inter } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/libs/utils";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata:Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"NFT calander",
		"trending nfts",
		"Popular NFTs",
		"nft mints",
		"best crypto nft",
	],
	
	creator: "pratikgrv",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
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
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<QueryProvider>{children}</QueryProvider>
				</ThemeProvider>
				
			</body>
		</html>
	);
}
