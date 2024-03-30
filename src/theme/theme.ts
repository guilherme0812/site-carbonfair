/* eslint-disable no-mixed-spaces-and-tabs */
import { ThemeOptions } from "@mui/material";
import { red } from "@mui/material/colors";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const getThemeOptions = (mode: "dark" | "light"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: {
            default: "#121212",
            paper: "#232323",
          },
          text: {
            primary: "#fff",
          },
        }
      : {
          background: {
            default: "#fff",
            paper: "#fff",
          },
          text: {
            primary: "#222222",
          },
        }),
    primary: {
      main: "#547329",
      light: "#709933 ",
      dark: "#384d1f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    // text: {
    // 	primary: '#3E4242',
    // },
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
    // fontSize: 12,
  },
});

export const greyColor = "#D9D9D9";
export const scopeColors = ["#6C9AB5", "#FF6B3D", "#DACA3E"];
export const getScopeColor = (index: number) => scopeColors[index];
