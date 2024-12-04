/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./public/index.html'
	],
	theme: {
		extend: {
			colors: {
				primary: "#1a73e8",
				secondary: "#f8f9fa",
			},
		},
	},
	plugins: [],
};
