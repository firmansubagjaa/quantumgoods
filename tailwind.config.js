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

          "primary": "#d6b917",

          "secondary": "#5dd896",

          "accent": "#a40ace",

          "neutral": "#28242d",

          "base-100": "#ffffff",

          "info": "#51b5ec",

          "success": "#2de6be",

          "warning": "#f9b92f",

          "error": "#ed4d31",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

