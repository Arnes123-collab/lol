/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#F8F4EC",
          secondary: "#EFE7DA",
          card: "#FFFFFF",
        },
        accent: {
          gold: "#C62828",
          "gold-light": "#E53935",
          red: "#C62828",
          "red-light": "#E53935",
          success: "#2E7D32",
          warning: "#F9A825",
        },
        text: {
          primary: "#222222",
          muted: "#666666",
          dim: "#777777",
        },
        border: {
          default: "#E5DED3",
          accent: "#C62828",
        },
      },
      fontFamily: {
        display: ["Inter", "Roboto", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.4rem, 7vw, 5rem)", { lineHeight: "1.05" }],
        section: ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.12" }],
      },
    },
  },
  plugins: [],
};
