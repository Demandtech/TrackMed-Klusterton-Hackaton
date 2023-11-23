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
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans - serif"],
      },
    },
  },
  plugins: [],
};
// src/assets/images/trackmedbg.png
