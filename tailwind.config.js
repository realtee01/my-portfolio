/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        text: "#f5f5f5",
        muted: "#888888",
        stroke: "#1f1f1f",
        // Adding the Synapse branding colors
        primary: "#89AACC",
        accent: "#4E85BF",
      },
      fontFamily: {
        // This MUST have the single quotes inside double quotes
        display: ["'Instrument Serif'", "serif"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
