/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#4CB5F9",
        customFace: "#385185",
        colorFundo: "#FAFAFA",
        colorTxt: "#737373",
        colorBorda: "#dbdbdb",
        colorBtnHover: "#0095F6",
      },
      fontSize: {
        fontmin: "10px",
      },
      screens: {
        qpx: "500px",
      },
    },
  },
  plugins: [],
};
