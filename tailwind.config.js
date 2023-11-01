/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        dmSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        sans: [
          "DM Sans, sans-serif",
          {
            fontFeatureSettings: '"clig" off, "liga" off',
          },
        ],
      },
      backgroundImage: {
        "gradient-135": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      backgroundPosition: {
        "no-gradient": "0% 100%",
        "show-gradient": "50% 50%",
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [],
};
