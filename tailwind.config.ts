import { type Config } from "tailwindcss"
const colors = require("tailwindcss/colors")

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#d25617",
        "custom-beige": "#d5c7b6",
        "custom-beige-gray": "#b69e90",
        "custom-gray-dark": "#2b2b2b",
        "custom-gray-light": "#483d37",
        "custom-green-gray": "#b69e90",
        "custom-brown-gray": "#483d37",
      },
    },
  },
  plugins: [],
} satisfies Config
