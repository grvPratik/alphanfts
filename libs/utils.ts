import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-");
}

export function formatDate(inputDate: Date | null | undefined) {
	if (!inputDate) {
		return "TBA";
	}

	const formattedDate = format(new Date(inputDate), "d MMM yyyy");
	return formattedDate;
}

export function formatBlockchian(blockchain: string) {
	if (!blockchain) {
		return "TBA";
	} else return blockchain;
}

export function titleLengthFormat(title: string) {
	const maxLength = 15;

	if (title.length > maxLength) {
		return title.substring(0, maxLength) + "...";
	}

	return title;
}

export function supplyCheck(supply: number) {
	if (supply === 0) {
		return "TBA";
	} else if (supply === 1) {
		return "FREE";
	} else 
		return supply
}
