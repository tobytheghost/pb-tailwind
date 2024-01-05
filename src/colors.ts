import type {
  RecursiveKeyValuePair,
  ResolvableTo,
} from "tailwindcss/types/config";

export const TINT_BASE_COLORS = {
  black: "#343a40",
  yellow: "#f9c000",
  red: "#D7384D",
  teal: "#24B6B6",
  orange: "#FA8C2E",
  green: "#519828",
  blue: "#007DB7",
} as const;

export const TINTS = {
  "10": 90,
  "20": 80,
  "40": 60,
  "60": 40,
  "80": 20,
  "100": 0,
  "120": -20,
  "140": -40,
  "160": -60,
  "180": -80,
} as const;

function getTintColor(col: string, amt: number) {
  let usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  const hex = (g | (b << 8) | (r << 16)).toString(16);

  const padded = hex.padStart(6, "0");

  return (usePound ? "#" : "") + padded;
}

export const colorsWithTints = Object.fromEntries(
  Object.entries(TINT_BASE_COLORS)
    .map(([name, value]) => {
      return Object.entries(TINTS).map(([tintName, tintValue]) => {
        return [
          `${name}-${tintName}`,
          `#${getTintColor(value.replace("#", ""), tintValue)}`,
        ] as const;
      });
    })
    .reduce((acc, curr) => [...acc, ...curr], [])
);

export const baseColors = {
  transparent: "transparent",
  current: "currentColor",
  white: "#ffffff",
  "grey-1": "#667984",
  "grey-2": "#b0bdbf",
  "grey-3": "#dce0e1",
  "grey-4": "#e2e8ec",
  "grey-5": "#eff2f4",
  "grey-6": "#f4f6f8",
  "grey-7": "#f9fafb",
  "grey-8": "#fbfcfd",
};

export const colors: ResolvableTo<RecursiveKeyValuePair<string, string>> = {
  ...baseColors,
  ...colorsWithTints,
};
