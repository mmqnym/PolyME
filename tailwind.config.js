/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wave: "wave 3s linear infinite",
        "wave-slow": "wave 5s linear infinite",
        "wave-slower": "wave 8s linear infinite",
        "lower-bounce": "lowerBounce 2s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        lowerBounce: {
          "0%, 100%": { transform: "translateY(-8%); opacity: 1" },
          "50%": { transform: "translateY(0%); opacity: .7" },
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
