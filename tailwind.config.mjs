/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'crave-black': '#181818',
			'crave-rose': '#FFCADE',
			'crave-white': '#F4F4F4'
		},
		fontFamily: {
			sans: ['Josefin Sans Variable', 'system-ui', 'sans-serif'],
			serif: ['Playfair Display Variable', 'serif'],
		}
	},
	plugins: [],
}
