/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bouncer : {
          "0%" : {
            transform : "translateY(1px)"
          }, 
          "100%" : {
            transform : "translateY(32px)"
          }
        },
        scroll: {
          "0%" : {
            transform: "translateX(0)",
            width: 0,
          },
          "40%" : {
            width: 60,
          },
          "100%": {
            transform: "translateX(65px)",
            width: 0,
            opacity: 0
          }
        }
      },
      animation : {
        "bouncer" : "bouncer 1s alternate infinite",
        "scroll" : "scroll 2s ease-in infinite"
      },
      fontFamily : {
        "arch" : "'Archivo', sans-serif",
        "arch-b" : "'Archivo Black', sans-serif",
        "anton" : "'Anton', sans-serif",
        "os" : "'Open Sans', sans-serif",
        "ubuntu" : "'Ubuntu', sans-serif",
        "font-paris" : "'Parisienne', cursive",
      }
    },
  },
  plugins: [],
}

