import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex w-full justify-center items-center flex-col gap-4">
			<h2 className=" text-red-600">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link className="button-20 px-5 py-3" href="/">Return Home</Link>
		</div>
	);
}
