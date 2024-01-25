import defaultTheme from "tailwindcss/defaultTheme";
/**
 * This parameter contains default Tailwind parameter values and our custom ones.
 * This helps create consistency throughout the project.
 */
export const appExtendedThemeParams = {
  screens: {
    /**
     * Adding `1px` helps making the mobile-first `max-width`
     */
    "2xs": "321px",
    // => @media (min-width: 321px) { ... }
    xs: "475px",
    // => @media (min-width: 475px) { ... }
    sm: defaultTheme.screens.sm,
    // => @media (min-width: 640px) { ... }
    md: defaultTheme.screens.md,
    // => @media (min-width: 768px) { ... }
    lg: "1104px",
    // => @media (min-width: 1104px) { ... }
    xl: defaultTheme.screens.xl,
    // => @media (min-width: 1280px) { ... }
    "2xl": defaultTheme.screens["2xl"],
    // => @media (min-width: 1536px) { ... }
  },
};
