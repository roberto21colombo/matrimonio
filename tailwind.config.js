/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Specifica dove Tailwind deve cercare le classi
  ],
  theme: {
    extend: {}, // Personalizzazioni opzionali
  },
  plugins: [], // Aggiungi plugin di Tailwind, se necessario
}
