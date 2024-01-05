import type { Config } from "tailwindcss";

import { colors } from "./colors";
import { flexGridPlugin } from "./plugins/flexGridPlugin";
import { typographyPlugin } from "./plugins/typographyPlugin";
import { screens } from "./screens";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens,
    colors,
  },
  plugins: [typographyPlugin, flexGridPlugin],
  safelist: [
    { pattern: /bg-./ },
    { pattern: /text-./ },
    { pattern: /border-./ },
  ],
};

export default config;
