/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navBg: '#7db9cc', // Voor top en sidebar
                primaryBg: '#F3F4F6', // Primaire achtergrond
                secondaryBg: '#c95e16', // Secundaire achtergrond

                primary: '#1E3A8A', // Blauw
                secondary: '#F59E0B', // Oranje
                tertiary: '#FFA500',
                background: '#F3F4F6', // Lichtgrijs voor de achtergrond
                textPrimary: '#111827', // Donker voor de tekst
            },
            fontFamily:{
                sans: ['Roboto', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [],
}
