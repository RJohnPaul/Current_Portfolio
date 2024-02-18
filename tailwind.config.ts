import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
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
        background: "#080506",
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
        slide: "slide 100s linear infinite",
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
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
  

};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;

