import React from "react";

const RatingValue = ({ rating }:{rating:number}) => {
	if (!rating) {
		return "undefined"
	}
	else if (rating < 4) {
		return (
			<div
				className="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md"
				style={{ opacity: 1 }}
			>
				<span className="">Low</span>
			</div>
		);
	} else if (rating >= 4 && rating <= 7) {
		return (
			<div
				className="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md"
				style={{ opacity: 1 }}
			>
				<span className="">Average</span>
			</div>
		);
	} else if (rating > 7 && rating <= 10) {
		return (
			<div
				className="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md"
				style={{ opacity: 1 }}
			>
				<span className="">High</span>
			</div>
		);
	} else if (rating > 10) {
		return (
			<div
				className="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-purple-500/20 text-purple-600 py-1 px-2 text-xs rounded-md"
				style={{ opacity: 1 }}
			>
				<span className="">Hyped</span>
			</div>
		);
	}

	return (
		<div
			className="relative grid items-center font-bold uppercase whitespace-nowrap select-none  py-1 px-2 text-xs rounded-md"
			style={{ opacity: 1 }}
		>
			<span className="">Unavailable</span>
		</div>
	);
};

export default RatingValue;
