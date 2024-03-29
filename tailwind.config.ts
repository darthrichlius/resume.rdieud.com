import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

import { appExtendedThemeParams } from "./app/config/params";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["fontdisplay"],
      body: ["fontbody", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      zinc: defaultColors.zinc,
      red: {
        50: "#ffe5e5",
        100: "#ffc7c7",
        200: "#ff9494",
        300: "#ff5c5c",
        400: "#ff2929",
        500: "#f10000",
        600: "#c20000",
        700: "#8f0000",
        800: "#610000",
        900: "#2e0000",
        950: "#190000",
      },
      wine: {
        50: "#fce5d9",
        100: "#fac7b8",
        200: "#f58070",
        300: "#f02424",
        400: "#ba0d21",
        500: "#720821",
        600: "#5b0610",
        700: "#430505",
        800: "#300903",
        900: "#180702",
        950: "#0a0401",
      },
    },
    spacing: {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "10": "10px",
      "12": "12px",
      "16": "16px",
      "20": "20px",
      "24": "24px",
      "28": "28px",
      "32": "32px",
      "36": "36px",
      "40": "40px",
      "44": "44px",
      "48": "48px",
      "56": "56px",
      "64": "64px",
      "72": "72px",
      "80": "80px",
      "96": "96px",
      "112": "112px",
      "128": "128px",
      "144": "144px",
      "160": "160px",
      "176": "176px",
      "192": "192px",
      "256": "256px",
      "288": "288px",
      "320": "320px",
      "384": "384px",
      "448": "448px",
      "512": "512px",
    },
    screens: {
      /**
       * As our screens contain small breakpoints below `sm`, we can't use `extend`.
       * Additionally, we don't use `defaultTheme.screens` as our screen definition parameters already take into account the Tailwind defaults.
       */

      ...appExtendedThemeParams.screens,
    },
  },
  plugins: [],
};
export default config;
