import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#fcfcfc",
        "colors-background-bg-primary": "#fff",
        "neutral-grey": "#e7e7e7",
        "text-5": "#3d3d3d",
        "text-1": "#6e6d6d",
        "text-3": "#4f4f4f",
        "colors-border-border-primary": "#d0d5dd",
        "colors-text-text-secondary-700": "#344054",
        "text-2": "#5d5d5d",
        "neutral-grey-2": "#d1d1d1",
        "component-colors-utility-success-utility-success-50": "#ecfdf3",
        "component-colors-utility-success-utility-success-200": "#abefc6",
        "component-colors-utility-success-utility-success-700": "#067647",
        "neutral-grey-4": "#888",
        "orange-300": "#dc4a2d",
        "orange-150": "#fed3ca",
        "orange-50": "#fef4f2",
        gainsboro: "#d9d9d9",
        "neutral-grey-3": "#b0b0b0",
        lightpink: "#fcb4a5",
      },
      borderRadius: {
        "3xl-5": "22.5px",
        "41xl": "60px",
        "17xl": "36px",
        "30xl": "49px",
        "radius-sm": "6px",
        "radius-full": "9999px",
      },
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
