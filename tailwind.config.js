/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'wave': "url('./assets/bg.svg')",
      }
    }
  },
  plugins: [],
};
