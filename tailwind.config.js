/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "html": "#FFF1E9",
        "css": "#E0FDEF",
        "js": "#ccd9f9",
        "accessibility": "#F6E7FF",
        "dark-theme": "#313E51",
        "darkness": "#313E51",
        "steel-blue": "#626C7F",
        "light-blue": '#ABC1E1',
        "purple": "#A729F5",
        "purple-hover": "#761dad",
        "bg-col": "white",
        "button-bg": "white",
        "option-bg": "#F4F6FA",
        "option-color": "#626C7F",
        "correct-color": "#26D782",
        "invalid-color": "#EE5454",
      },
      backgroundImage: {
        patternBg: "url(./assets/images/pattern-background-mobile-light.svg)",
        patternBgDark: "url(./assets/images/pattern-background-mobile-dark.svg)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  
};
