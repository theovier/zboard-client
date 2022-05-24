module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"4k": "3840px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("tailwind-heropatterns")({
			// as per tailwind docs you can pass variants
			variants: [],

			// the list of patterns you want to generate a class for
			// the names must be in kebab-case
			// an empty array will generate all 87 patterns
			patterns: ["bubbles"],

			// The foreground colors of the pattern
			colors: {
				default: "#f1f5f9",
				"blue-dark": "#000044", //also works with rgb(0,0,205)
			},

			// The foreground opacity
			opacity: {
				default: "0.15",
				100: "1.0",
			},
		}),
	],
};
