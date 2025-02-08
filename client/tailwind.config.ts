import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-1": "#EADDFF",
        "color-dark-1": "#1D1B20",
        "color-dark-2": "#49454F",
        "color-light-blue-1": "#ECE6F0",
      },
      boxShadow: {
        "custom-1": "0px 2px 5px 0px #171A1F17",
        "custom-2": "0px 0px 2px 0px #171A1F1F",
        "custom-3": "0px 1px 3px 0px #0000004D",
        "custom-4": "0px 4px 8px 3px #00000026",
      },
    },
  },
  plugins: [],
} satisfies Config;
