/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nohemiBlack" : "nohemiBlack, sans-serif",
        "nohemiBold" : "nohemiBold, sans-serif",
        "nohemiSemiBold" : "nohemiSemiBold, sans-serif",
        "nohemiMedium" : "nohemiMedium, sans-serif",
        "nohemiRegular" : "nohemiRegular, sans-serif",
        "nohemiLight" : "nohemiLight, sans-serif",
        "nohemiExtraLight" : "nohemiExtraLight, sans-serif",
      }
    },
  },
  plugins: [],
}

