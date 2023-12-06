import Link from "next/link";

import { cn } from "@/libs/utils";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn("flex items-center gap-3 md:gap-4 lg:gap-8 mx-6", className)}
			{...props}
		>
			<Link
				href="/mints"
				className=" text-letter text-sm font-medium transition-colors hover:text-blue-800"
			>
				Mints
			</Link>

			<Link
				href="/resources"
				className="text-sm text-letter font-medium text-muted-foreground transition-colors hover:text-blue-800"
			>
				Resources
			</Link>
			<Link
				href="/rewards"
				className="text-sm  text-letter font-medium text-muted-foreground transition-colors hover:text-blue-800"
			>
				about
			</Link>
		</nav>
	);
}
