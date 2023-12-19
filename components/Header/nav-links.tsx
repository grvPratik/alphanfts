import Link from "next/link";

import { cn } from "@/libs/utils";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"flex items-center gap-3 md:gap-4 lg:gap-8 mx-6 antialiased",
				className
			)}
			{...props}
		>
			<Link
				href="/mints"
				className=" text-letter text-sm  transition-colors hover:text-blue-800"
			>
				Mints
			</Link>

			<Link
				href="/resources"
				className="text-sm text-letter  text-muted-foreground transition-colors hover:text-blue-800"
			>
				Resources
			</Link>
			<Link
				href="/about"
				className="text-sm  text-letter  text-muted-foreground transition-colors hover:text-blue-800"
			>
				about
			</Link>
		</nav>
	);
}
