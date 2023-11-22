/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary100: '#35BC5B',
        primary50: '#35BC5B80',
        white50: '#f4f4f4',
        dark10: 'rgba(30, 30, 30, 0.5)',
        dark20: '#1E1E1E',
        backdrop: 'rgba(0,0,0, 0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans - serif'],
      },
    },
  },
  plugins: [],
}
