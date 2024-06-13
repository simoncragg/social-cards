/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cherry: ["Lexend Giga", "sans-serif"],
    },
    extend: {
      backgroundImage: {
      "tropical-ocean": "linear-gradient(to top, #004080, #005f99, #0072b1, #0086c3)",
      "wave": "url('/wave.svg')",
      },
      keyframes: {
        "wave-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "wave-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "wave-left": "wave-left 1s ease-out forwards",
        "wave-right": "wave-right 1s ease-out forwards",
      },
    },
    plugins: [],
  }
}
