"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme: ThemeOptions = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: [
      "Helvetica",
      "Helvetica Neue",
      "HelveticaNeue-Light",
      "Helvetica Neue Light",
      "Arial",
      "Lucida Grande",
      "sans-serif",
    ].join(","),

    "main-title": {
      fontFamily: "Old Standard TT",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 48,
      lineHeight: "74px",
      color: "#AD9742",
    },
    "category-title": {
      fontFamily: "Old Standard TT",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 40,
      lineHeight: "74px",
      color: "#AD9742",
    },
    "page-title": {
      fontFamily: "Old Standard TT",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 40,
      lineHeight: "49px",
      color: "#AD9742",
    },

    "card-title": {
      fontFamily: "Old Standard TT",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 24,
      lineHeight: "30px",
      color: "#AD9742",
    },
    "card-title-main": {
      fontFamily: "Old Standard TT",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 40,
      lineHeight: "30px",
      color: "#AD9742",
    },

    base: {
      fontFamily: "auto",
      fontSize: 18,
      lineHeight: "22px",
      color: "imherit",
    },
    "base-light": {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "21px",
      color: "imherit",
    },
  },

  components: {
    // MuiFilledInput: {
    //   styleOverrides: {
    //     input: {
    //       "&:-webkit-autofill": {
    //         WebkitBoxShadow: "Red",
    //         WebkitTextFillColor: "blue",
    //         caretColor: "inherit",
    //       },
    //     },
    //   },
    // },

    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     input: {
    //       "&:-webkit-autofill": {
    //         WebkitBoxShadow: "red",
    //         WebkitTextFillColor: "white",
    //         caretColor: "blue",
    //       },
    //     },
    //   },
    // },
    MuiMenu: {
      styleOverrides: {
        list: {
          color: "#5C6B62",
          fontWeight: 400,
          borderRadius: "6px",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          "&:hover": {
            background: "#CDD0BC",
          },
        },
      },
    },

    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          "& .PrivatePickersFadeTransitionGroup-root": {
            fontSize: "16px",
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#5C6B62",
          "&.Mui-checked": {
            color: "#5C6B62",
          },
        },
      },
    },

    MuiClockPicker: {
      styleOverrides: {
        arrowSwitcher: {
          right: "-5px",
          top: "5px",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          fontSize: 18,
        },
        body: {
          height: "100%",
        },
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        "& #root": {
          height: "100%",
        },
        "& #root > div": {
          height: "100%",
        },
        "& #root .Toastify": {
          height: "auto",
        },
      },
    },
  },

  palette: {
    background: {
      // pink
      default: "white",
    },
    primary: {
      main: "#5C6B62",
    },
  },
});

// theme.typography["main-title"] = {
//   ...theme.typography["main-title"],
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 40,
//   },
// };
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
