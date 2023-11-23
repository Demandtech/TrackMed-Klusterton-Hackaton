/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero2: "url('assets/images/bg.png')",
        hero: "url('assets/images/trackmedbg.png')",
        footerBg: "url('assets/images/union.png')",
        // 'card': "url('assets/images/thumbnail-background.svg')",
      },
      colors: {
        primary100: "#35BC5B",
        primary50: "#35BC5B80",
        deepgreen: "#027600",
        white50: "#f4f4f4",
        dark10: "rgba(30, 30, 30, 0.5)",
        dark20: "#1E1E1E",
        primary80: '#027600',
        backdrop: 'rgba(0,0,0, 0.2)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans - serif"],
      },
      boxShadow: {
        aside: '5px 0px 15px 0px rgba(53, 188, 91, 0.25);',
      },
      fontSize: {
        'text-sm': '15px',
      },
    },
  },
  plugins: [],
};
// src/assets/images/trackmedbg.png
