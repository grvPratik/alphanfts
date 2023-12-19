import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background-color)",
				letter: "var(--text-color)",
				input: "var(--input-color)",
				header: "var(--header-color)",
				borderColor: "var(--border-color)",
			},
		},
		
	},
	plugins: [],
};
export default config
