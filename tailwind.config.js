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
        "lower-bounce": "lowerBounce 1s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        lowerBounce: {
          "0%, 100%": {
            transform: "translateY(-10%); opacity: 1",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none; opacity: .8",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
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
