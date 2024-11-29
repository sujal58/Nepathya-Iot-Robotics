/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom text colors
        "text-primary": "#00539F",
        "text-secondary": "#003B71",
        "text-tertiary": "#DC2626",

        // Custom background colors
        "bg-button": "rgb(159, 22, 46)",
        "bg-nav": "#283172",
        "bg-secondary": "#D7D6D6",

        "border-button": "rgb(143, 184, 230)",
      },
    },
  },
  plugins: [],
};
