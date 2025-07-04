import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1e1e1e",
          secondary: "#2a2a2a",
          tertiary: "#333333",
          accent: "#404040",
        },
        light: {
          primary: "#e5e5e5",
          secondary: "#b8b8b8",
          muted: "#9a9a9a",
        },
        accent: {
          blue: "#4a90e2",
          "blue-hover": "#3a7bd5",
        },
      },
      backgroundColor: {
        primary: "var(--background)",
        secondary: "var(--background-secondary)",
        tertiary: "var(--background-tertiary)",
      },
      textColor: {
        primary: "var(--foreground)",
        secondary: "var(--foreground-secondary)",
      },
      borderColor: {
        primary: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
export default config;
