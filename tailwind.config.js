/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#03045e",
        lightBlue: "#caf0f8",
        cyanY: "#48cae4",
        deepBlue: "#14213d",
        orangeY: "#FF4F00",
        ghostWhite: "#F8F8FF",
        "Black-600": "#100C08",
        primary: " #5E17EB ",
        "Purple-100": " rgba(94, 23, 235, 0.15)",
        Brown: " #3E3434",
      },
      maxWidth: {
        "8xl": "86rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bebas: ["bebas_neueregular", "sans-serif"],
      },
      boxShadow: {
        btn: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        nav: " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
        "mobile-nav": " -6px 4px 47px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
