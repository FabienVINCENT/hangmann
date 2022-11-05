const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [iOSHeight],
};
