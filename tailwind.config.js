module.exports = {
  content: [

    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      "fontFamily": {
        "bebas": "Bebas Neue"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
