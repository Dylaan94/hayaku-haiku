/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cherry-blossom-pink": "#FFB7C5",
        "summer-yellow": "#FFF7E6",
        "autumn-orange": "#FADCD9",
        "winter-blue": "#E6F1FA",
        "new-years-green": "#E3F1E5",
        "season-green": "#E4F5E2",
        "heaven-blue": "#E3EDF9",
        "earth-brown": "#F2E5D9",
        "humanity-yellow": "#FFF9E6",
        "observances-purple": "#F5E3F9",
        "animals-red": "#F7DDEB",
        "green-plants": "#E3F1E5",
      },
      fontFamily: {
        sans: ["Noto Serif JP", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
