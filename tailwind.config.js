/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx}' // Specifica dove Tailwind deve cercare le classi
	],
	theme: {
		screens: {
			sm: '300px',
			md: '600px'
		},
		extend: {
			fontFamily: {
				coursive: ['Coursive', 'sans-serif'],
				coursive2: ['Coursive2', 'sans-serif'],
				codec: ['Codec', 'sans-serif']
			}
		} // Personalizzazioni opzionali
	},
	plugins: [] // Aggiungi plugin di Tailwind, se necessario
}
