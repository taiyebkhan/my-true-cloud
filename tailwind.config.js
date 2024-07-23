/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "481px",
        sm: "641px",
        md: "769px",
        lg: "1025px",
        xl: "1350px",
        // xl: "1450px",
        "2xl": "1537px",
      },
      spacing: {
        5.5: "1.375rem",
      },
    },
  },
  plugins: [],
};
