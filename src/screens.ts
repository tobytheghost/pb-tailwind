import type { ResolvableTo, ScreensConfig } from "tailwindcss/types/config";

export const screens: ResolvableTo<ScreensConfig> = {
  sm: "350px",
  // => @media (min-width: 350px) { ... }
  md: "600px",
  // => @media (min-width: 600px) { ... }
  lg: "1025px",
  // => @media (min-width: 1025px) { ... }
  xl: "1272px",
  // => @media (min-width: 1272px) { ... }
}
