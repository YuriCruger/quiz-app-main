/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "html": "#FFF1E9",
        "css": "#E0FDEF",
        "js": "#ccd9f9",
        "accessibility": "#F6E7FF",
        "dark-theme": "#313E52",
        "card-theme": "#293543",
        "steel-blue": "#626C7F",
        "light-blue": '#ABC1E1',
        "purple": "#A729F5",
        "purple-hover": "#761dad",
        "correct-color": "#26D782",
        "invalid-color": "#EE5454",
        gray_light: "#CCCCCC",
        options: "#F4F6FA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
    },
    backgroundImage: {
      patternBg: "url(./images/pattern-background-mobile-light.svg)",
      patternBgDark: "url(./images/pattern-background-mobile-dark.svg)",
    },
  },
}
}