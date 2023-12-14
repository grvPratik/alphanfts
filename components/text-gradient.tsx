import React from "react";

const TextGradient = ({ text }: { text: string }) => {
	const getGradientText = (textToCheck: string) => {
		switch (textToCheck) {
			case "Solana":
				return "bg-gradient-to-r from-green-400 via-blue-300 to-purple-600 text-transparent bg-clip-text";
			case "Ethereum":
				return "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-transparent bg-clip-text";
			default:
				return "";
		}
	};

	const gradientClasses = getGradientText(text);

	return gradientClasses ? (
		<span className={gradientClasses}>{text}</span>
	) : (
		<span>{text}</span>
	);
};

export default TextGradient;
