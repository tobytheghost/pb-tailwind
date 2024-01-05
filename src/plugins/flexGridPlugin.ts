import { type PluginCreator } from "tailwindcss/types/config";

const KEYS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

export const flexGridPlugin: PluginCreator = ({ addUtilities }) => {
  const flexGrid = {
    ".flex-grid-container": {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      margin: "0 auto",
      "@screen lg": {
        maxWidth: "1200px",
      },
    },
    ".flex-grid-row": {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "-12px",
      marginRight: "-12px",
      width: "calc(100% + 24px)",
      "@screen md": {
        marginLeft: "-14px",
        marginRight: "-14px",
        width: "calc(100% + 28px)",
      },
      "@screen lg": {
        marginLeft: "-24px",
        marginRight: "-24px",
        width: "calc(100% + 48px)",
      },
    },
    ".flex-grid-item": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingLeft: "12px",
      paddingRight: "12px",
      "@screen md": {
        paddingLeft: "14px",
        paddingRight: "14px",
      },
      "@screen lg": {
        paddingLeft: "24px",
        paddingRight: "24px",
      },
    },
    ...KEYS.reduce((acc, i) => {
      acc[`.flex-grid-span-${i + 1}`] = {
        flex: `0 0 calc(${((i + 1) / 12) * 100}%)`,
        maxWidth: `calc(${((i + 1) / 12) * 100}%)`,
      };
      acc[`.flex-grid-offset-${i}`] = {
        marginLeft: `calc(${(i / 12) * 100}%)`,
      };
      return acc;
    }, {} as Record<string, Record<string, string>>),
  };
  addUtilities(flexGrid);
};
