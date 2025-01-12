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
		fontSize: {
			xs: '0.75rem',
			sm: '1.25rem',
			base: '1.5rem',
			lg: '1.125rem',
			xl: '2rem',
			'2xl': '3rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '6rem'
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
