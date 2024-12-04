/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: '#1a73e8',
				secondary: '#f8f9fa',
			}
		},
	},
	plugins: [],
};
