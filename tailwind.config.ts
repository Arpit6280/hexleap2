import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dashed":
          " linear-gradient(to right, rgb(255,255,255) 33%, rgb(178, 181, 174) 0%)",
        "dark-gradient-dashed":
          " linear-gradient(to right, rgb(255,255,255) 33%, rgba(245, 242, 242, 0) 0%)",
      },
      backgroundSize: {
        "13": "13px 1px",
      },
      scale: {
        "103": "1.02",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
