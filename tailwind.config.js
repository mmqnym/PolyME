const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			animation: {
				wave: "wave 8s linear infinite",
				"lower-bounce": "lowerBounce 1s ease-in-out infinite",
				ripple: "ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite",
				"slow-jump": "slowJump 5s ease-in-out infinite",
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
				ripple: {
					"0%": { transform: "scale(0.8)", opacity: 1 },
					"100%": { transform: "scale(2.4)", opacity: 0 },
				},
				slowJump: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-1%)" },
					"100%": { transform: "translateY(0)" },
				},
			},
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar")({
			nocompatible: true,
			preferredStrategy: "pseudoelements",
		}),
		flowbite.plugin(),
	],
};
