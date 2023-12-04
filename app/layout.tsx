import { Roboto_Mono, Inter } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/libs/utils";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";


const inter = Roboto_Mono({ subsets: ["latin"] });

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
					inter.className
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
