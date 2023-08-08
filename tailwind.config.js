/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },


  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#db6b69",

          "secondary": "#f9bb63 ",

          "accent": "#d8bb38",

          "neutral": "#1d1c27",

          "base-100": "#efebf5",

          "info": "#7c8cd5",

          "success": "#56e1bc",

          "warning": "#efc762",

          "error": "#f6282e",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

