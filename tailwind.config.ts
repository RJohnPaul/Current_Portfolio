import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.white,
        secondary: "#D3D2D2",
        background: "#040102",
        foreground: colors.neutral[400],
        muted: "#090507",
        border: "#2D2E30",
        divider: "#1F2022",
      },
      backgroundImage: {
        "globe-pattern": "url('/globe-pattern.svg')",
        "fade-gradient":
          "linear-gradient(90deg, #090507, transparent 20%, transparent 80%, #090507)",
      },
      animation: {
        slide: "slide 35s linear infinite",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
    },
    screens: {
      sm: "100px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    lineHeight: {
      relaxed: "1.8",
    },
    fontFamily: {
      poppins: "var(--font-default)",
      sans: "var(--font-calsans)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
