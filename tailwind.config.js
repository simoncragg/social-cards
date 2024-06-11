/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'tropical-ocean': 'linear-gradient(to top, #004080, #005f99, #0072b1, #0086c3)',
      },
    },
    plugins: [],
  }
}

