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
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 920,
      lg: 1200,
      xl: 1800,
    },
  },
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
  overrides: {
    charts: {
      vertibalBars: {
        bar1: "#395CCA",
        bar2: "#F4B15D",
      },
      area: {
        area1: "#395CCA",
        area2: "#F4B15D",
        area3: "#CFA9A8",
        area4: "#52A2A5",
      },
      line: {
        line1: "#395CCA",
        line2: "#F4B15D",
        line3: "#CFA9A8",
        line4: "#52A2A5",
      },
      doughnut: {
        cell1: "#F4B15D",
        cell2: "#395CCA",
        cell3: "#52A2A5",
        cell4: "#B4BDC2",
        cell5: "#8BB439",
        cell6: "#CA39B3",
        cell7: "#dbc362",
        cell8: "#a5b14d",
        cell9: "#b6e566",
        cell10: "#8f25f0",
        cell11: "#b452b0",
        cell12: "#36f946",
        cell13: "#81de6f",
        cell14: "#2eb425",
        cell15: "#f80b15",
        cell16: "#94e924",
        cell17: "#791be7",
        cell18: "#cde6a0",
        cell19: "#d26948",
        cell20: "#1e6550",
        cell21: "#6ec351",
        cell22: "#3e827d",
        cell23: "#613dc0",
        cell24: "#ca1ad0",
        cell25: "#d48c40",
        cell26: "#b142c1",
        cell27: "#114280",
        cell28: "#b47440",
        cell29: "#cf3176",
        cell30: "#987ac4",
        cell31: "#2b4514",
        cell32: "#92f333",
        cell33: "#f2b5d3",
        cell34: "#c44b90",
        cell35: "#c347a2",
        cell36: "#6d3c90",
        cell37: "#2c3dbe",
        cell38: "#3ec280",
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
