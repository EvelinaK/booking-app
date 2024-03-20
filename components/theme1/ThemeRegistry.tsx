"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
// import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// const themeOptions: any = ({ theme }: any) => ({
//   typography: {
//     fontSize: 12,
//     fontFamily: roboto.style.fontFamily,
//   },
//   palette: {
//     primary: {
//       main: "#e5f2e3",
//       cardColor: "wheat",
//       shadowColor: "#f3beb3",
//       inverse: "#fff",
//       inputBackground: "#f1faf7",
//       border: "#c0ceca",
//       backgroundLightGreen: "#f1faf7",
//       textBlack: "#0a0b0b",
//       textBrow: "#371717",
//       disabled: "#D1D1D1",
//       hover: "#5AABD6",
//       light: "#8CC6E6",
//       bgTabSelect: "#E5E5E5",
//       bgTab: "#E6EDF1",
//       tabColor: "#333333",
//       successGreen: "#8BB439",
//       errorRed: "#D82727",
//       cardIcons: "#B4BDC2",
//       subtitleText: "#686868",
//       deniedRed: "#EC4436",
//       pickerText: "#E6EDF1",

//       infoGrey: "#686868",
//       infoGreen: "#9CC319",
//       webexDashboardWarningBorder: "#FF8A00",
//     },
//     link: {
//       main: "#1E94D3",
//       light: "#8CC6E6",
//     },
//     separator: "#c4c4c4",
//     borders: {
//       main: "#E6EDF1",
//     },
//   },
//   components: {
//     MuiPaginationItem: {
//       root: {
//         margin: "0 -1px",
//         fontSize: "1.4rem",
//         minWidth: "34px",
//         borderRadius: 0,
//         borderLeft: "1px solid #E6EDF1",
//         borderRight: "1px solid #E6EDF1",
//         borderBottom: "2px solid transparent",
//         backgroundColor: "#fff",
//         "@media (max-width: 767px)": {
//           fontSize: "1rem",
//         },
//       },
//       page: {
//         "&:hover": {
//           backgroundColor: theme.palette.primary.hover,
//           color: theme.palette.primary.inverse,
//         },
//         "&$selected": {
//           borderBottomColor: theme.palette.primary.main,
//           backgroundColor: "#fff",
//           "&:hover": {
//             backgroundColor: theme.palette.primary.hover,
//           },
//         },
//         "@media (max-width: 767px)": {
//           height: "32px",
//         },
//       },
//     },
//     MuiDivider: {
//       root: {
//         backgroundColor: "#d8d8d8",
//       },
//     },
//     MuiTableBody: {
//       root: {
//         fontSize: "1.4rem",
//         "& tr:hover": {
//           background: "#F9F9F9",
//         },
//         "& .link": {
//           color: theme.palette.link.main,
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//         },
//       },
//     },
//     MuiTableRow: {
//       root: {
//         background: "#fff",
//         "&$selected": {
//           background: "transparent",
//         },
//         '&[mode="update"]': {
//           background: "#F9F9F9",
//         },
//         "& .link": {
//           "&:hover": {
//             color: theme.palette.link.main,
//           },
//         },
//         "& .idx": {
//           color: "#828282",
//           wordBreak: "initial",
//         },
//       },
//       footer: {
//         background: "transparent",
//       },
//     },
//     MuiTableCell: {
//       root: {
//         padding: "9px 16px",
//         fontSize: "1.4rem",
//         color: "inherit",
//         fontWeight: 400,
//         border: "none",
//         borderBottom: "1px solid #E6EDF1",
//         backgroundColor: "transparent",
//         background: "transparent",
//         height: "60px",
//         minWidth: "auto",
//         textOverflow: "ellipsis",
//         "@media (max-width: 767px)": {
//           height: "50px",
//           borderTop: "1px solid #E6EDF1",
//         },
//         "& > button": {
//           flexShrink: 0,
//         },
//         "& [hidden]": {
//           display: "none",
//         },
//         "&:first-child": {
//           paddingLeft: "30px",
//           paddingRight: "16px",
//         },
//         "&:last-child": {
//           paddingRight: "30px",
//           paddingLeft: "16px",
//         },
//       },
//       paddingNone: {
//         "&:first-child": {
//           paddingLeft: 0,
//           paddingRight: 0,
//         },
//         "&:last-child": {
//           paddingRight: 0,
//           paddingLeft: 0,
//         },
//         "& div > button": {
//           color: "#828282",
//           maxWidth: 38,
//           maxHeight: 38,
//         },
//       },
//       head: {
//         color: "#828282",
//         fontSize: "1.6rem",
//         fontWeight: 400,
//         "&$paddingCheckbox": {
//           "&:last-child": {
//             fontSize: 0,
//             "& > *": {
//               pointerEvents: "auto",
//             },
//           },
//         },
//         "@media (max-width: 767px)": {
//           fontSize: "1.4rem",
//         },
//       },
//       body: {
//         wordBreak: "break-all",
//       },
//     },
//     MuiButton: {
//       root: {
//         fontSize: "1.6rem",
//         textTransform: "none",
//         lineHeight: "1.7rem",
//         "@media (max-width: 767px)": {
//           fontSize: "1.4rem",
//         },
//         "&$disabled": {
//           color: "inherit",
//           '&[type="submit"]': {
//             background: theme.palette.primary.light,
//             color: theme.palette.primary.inverse,
//           },
//         },
//       },
//       outlined: {
//         padding: "10px 23px",
//         color: "#828282",
//       },
//       text: {
//         padding: "12px 28px",
//         backgroundColor: theme.palette.primary.main,
//         color: theme.palette.primary.inverse,
//         fontWeight: "500",
//         lineHeight: "1em",
//         textTransform: "none",
//         whiteSpace: "nowrap",
//         "@media (max-width: 767px)": {
//           fontSize: "1.4rem",
//         },
//         '&[type="submit"]:hover': {
//           backgroundColor: theme.palette.primary.hover,
//         },
//       },
//       textPrimary: {
//         color: "#fff",
//         "&:hover": {
//           backgroundColor: theme.palette.primary.hover,
//         },
//         "&:disabled": {
//           backgroundColor: "#E6EDF1",
//           color: "#828282",
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       label: {
//         fontSize: "1.4rem",
//         width: "100%",
//         "&$disabled": {
//           color: "#B4BDC2",
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       input: {
//         padding: "10.5px 20px",
//         borderTop: "none",
//       },
//       root: {
//         "& $notchedOutline": {
//           borderColor: "#E6EDF1",
//         },
//         "&:hover $notchedOutline": {
//           borderColor: "#E6EDF1",
//         },
//         "&$focused": {
//           "& fieldset": { border: " 1px solid #B4BDC2 !important" },
//         },
//       },
//     },
//     MuiInputBase: {
//       root: {
//         backgroundColor: "#fff",
//         fontWeight: 400,
//         fontSize: "16px",
//         color: "#E6EDF1",
//         "&$disabled": {
//           "& fieldset": {
//             border: 0,
//           },
//         },
//       },
//       input: {
//         color: "#E6EDF1",
//         borderColor: "#E6EDF1",
//         '&[data-type="password"]': {
//           paddingRight: "46px",
//         },
//       },
//     },
//     MuiInputAdornment: {
//       root: {
//         color: "#686868",
//       },
//       positionStart: {
//         marginRight: 10,
//         color: "#828282",
//       },
//     },
//     MuiCheckbox: {
//       root: {
//         color: "#B4BDC2",
//         "& .MuiIconButton-label": {},
//       },
//       colorPrimary: {
//         "&$disabled": {
//           color: "#E6EDF1",
//         },
//       },
//       colorSecondary: {
//         "&:hover": {
//           background: "none",
//         },
//       },
//     },
//     MuiIconButton: {
//       root: {
//         alignSelf: "center",
//         fontSize: 0,
//         flexShrink: 0,
//         "&:hover": {
//           color: theme.palette.primary.main,
//         },
//       },
//       colorSecondary: {
//         "&:hover": {
//           backgroundColor: "#F9F9F9",
//         },
//       },
//     },
//     Mui: {
//       root: {
//         "&$checked": {
//           "&:hover": {
//             background: "none",
//           },
//         },
//       },
//     },
//     MuiContainer: {
//       root: {
//         padding: "100px 32px 32px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         background: theme.palette.bg,
//         "@media (max-width: 767px)": {
//           padding: "58px 0 70px",
//         },
//       },
//     },
//     MuiPaper: {
//       elevation2: {
//         boxShadow: "0px 5px 10px #EBEBEB",
//       },
//       rounded: {
//         borderRadius: "2px",
//       },
//     },
//   },
//   overrides: {
//     charts: {
//       vertibalBars: {
//         bar1: "#395CCA",
//         bar2: "#F4B15D",
//       },
//       area: {
//         area1: "#395CCA",
//         area2: "#F4B15D",
//         area3: "#CFA9A8",
//         area4: "#52A2A5",
//       },
//       line: {
//         line1: "#395CCA",
//         line2: "#F4B15D",
//         line3: "#CFA9A8",
//         line4: "#52A2A5",
//       },
//       doughnut: {
//         cell1: "#F4B15D",
//         cell2: "#395CCA",
//         cell3: "#52A2A5",
//         cell4: "#B4BDC2",
//         cell5: "#8BB439",
//         cell6: "#CA39B3",
//         cell7: "#dbc362",
//         cell8: "#a5b14d",
//         cell9: "#b6e566",
//         cell10: "#8f25f0",
//         cell11: "#b452b0",
//         cell12: "#36f946",
//         cell13: "#81de6f",
//         cell14: "#2eb425",
//         cell15: "#f80b15",
//         cell16: "#94e924",
//         cell17: "#791be7",
//         cell18: "#cde6a0",
//         cell19: "#d26948",
//         cell20: "#1e6550",
//         cell21: "#6ec351",
//         cell22: "#3e827d",
//         cell23: "#613dc0",
//         cell24: "#ca1ad0",
//         cell25: "#d48c40",
//         cell26: "#b142c1",
//         cell27: "#114280",
//         cell28: "#b47440",
//         cell29: "#cf3176",
//         cell30: "#987ac4",
//         cell31: "#2b4514",
//         cell32: "#92f333",
//         cell33: "#f2b5d3",
//         cell34: "#c44b90",
//         cell35: "#c347a2",
//         cell36: "#6d3c90",
//         cell37: "#2c3dbe",
//         cell38: "#3ec280",
//       },
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 480,
//       sm: 768,
//       md: 920,
//       lg: 1200,
//       xl: 1800,
//     },
//   },
// });

// // const themeOptions: any = createTheme({
// //   palette: {
// //     background: {
// //       default: "pink",
// //     },
// //     primary: {
// //       main: "#009BDF",
// //     },
// //     secondary: {
// //       main: "#14568D",
// //     },
// //     error: {
// //       main: "#FF0000",
// //     },
// //   },
// //   typography: {
// //     fontFamily: "Helvetica, Arial, sans-serif",
// //   },
// //   components: {
// //     MuiButton: {
// //       styleOverrides: {
// //         root: {
// //           borderRadius: "8px", // Round those edges
// //           // More overrides
// //         },
// //       },
// //     },
// //     MuiTableBody: {
// //       styleOverrides: {
// //         root: {
// //           background: "red", // Round those edges
// //           // More overrides
// //         },
// //       },
// //     },
// //     // Other component overrides
// //   },
// // });
// export const theme = createTheme(themeOptions);

import { darkScrollbar } from "@mui/material";

export let theme: any = createTheme({
  palette: {
    // primary: {
    //   main: "#e5f2e3",
    //   cardColor: "wheat",
    //   shadowColor: "#f3beb3",
    //   inverse: "#1AAA8D",
    //   inputBackground: "#f1faf7",
    //   border: "#c0ceca",
    //   backgroundLightGreen: "#f1faf7",
    //   textBlack: "#0a0b0b",
    //   textBrow: "#371717",
    //   disabled: "#D1D1D1",
    // },
    primary: {
      // main: "#e5f2e3",
      hover: "#5AABD6",
      main: "#1E94D3",
      light: "#8CC6E6",
      cardColor: "wheat",
      shadowColor: "#f3beb3",
      inverse: "#fff",
      inputBackground: "#f1faf7",
      border: "#c0ceca",
      backgroundLightGreen: "#f1faf7",
      textBlack: "#0a0b0b",
      textBrow: "#371717",
      disabled: "#D1D1D1",
      bgTabSelect: "#E5E5E5",
      bgTab: "#E6EDF1",
      tabColor: "#333333",
      successGreen: "#8BB439",
      errorRed: "#D82727",
      cardIcons: "#B4BDC2",
      subtitleText: "#686868",
      deniedRed: "#EC4436",
      pickerText: "#E6EDF1",
      infoGrey: "#686868",
      infoGreen: "#9CC319",
      webexDashboardWarningBorder: "#FF8A00",
    },
    secondary: {
      main: "#828282",
      light: "#C0C0C0",
      orange: "#FF8800",
      bgCont: "#fff",
    },
    link: {
      main: "#1E94D3",
      light: "#8CC6E6",
    },
    separator: "#c4c4c4",
    borders: {
      main: "#E6EDF1",
    },
    // secondary: {
    //   main: "#30b78d",
    // },
    commonColors: {
      grey: "#949494",
    },
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
  fontFamily: ["Mulish"].join(","),
  typography: {
    fontFamily: "Mulish",
    body2: {
      fontFamily: "Mulish",
      fontSize: "14px",
    },
    subtitle1: {
      fontFamily: "Mulish",
      fontSize: "18px",
      fontWeight: 500,
    },
    h1: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 800,
    },

    h3: {
      fontFamily: "Mulish",
      fontSize: "24px",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Mulish",
    },
    caption: {
      fontFamily: "Mulish",
      fontSize: "14px",
      fontWeight: 700,
    },
  },
  button: {
    fontFamily: "Mulish",
    fontSize: "16px",
    fontWeight: 400,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 920,
      lg: 1200,
      xl: 1800,
    },
  },
  overrides: {
    charts: {
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
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiPaginationItem: {
      root: {
        margin: "0 -1px",
        fontSize: "1.4rem",
        minWidth: "34px",
        borderRadius: 0,
        borderLeft: "1px solid #E6EDF1",
        borderRight: "1px solid #E6EDF1",
        borderBottom: "2px solid transparent",
        backgroundColor: "#fff",
        "@media (max-width: 767px)": {
          fontSize: "1rem",
        },
      },
      page: {
        "&:hover": {
          backgroundColor: theme.palette.primary.hover,
          color: theme.palette.primary.inverse,
        },
        "&$selected": {
          borderBottomColor: theme.palette.primary.main,
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: theme.palette.primary.hover,
          },
        },
        "@media (max-width: 767px)": {
          height: "32px",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#d8d8d8",
      },
    },
    MuiTableBody: {
      root: {
        fontSize: "1.4rem",
        "& tr:hover": {
          background: "#F9F9F9",
        },
        "& .link": {
          color: theme.palette.link.main,
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
    MuiTableRow: {
      root: {
        background: "#fff",
        "&$selected": {
          background: "transparent",
        },
        '&[mode="update"]': {
          background: "#F9F9F9",
        },
        "& .link": {
          "&:hover": {
            color: theme.palette.link.main,
          },
        },
        "& .idx": {
          color: "#828282",
          wordBreak: "initial",
        },
      },
      footer: {
        background: "transparent",
      },
    },
    MuiTableCell: {
      root: {
        padding: "9px 16px",
        fontSize: "1.4rem",
        color: "inherit",
        fontWeight: 400,
        border: "none",
        borderBottom: "1px solid #E6EDF1",
        backgroundColor: "transparent",
        background: "transparent",
        height: "60px",
        minWidth: "auto",
        textOverflow: "ellipsis",
        "@media (max-width: 767px)": {
          height: "50px",
          borderTop: "1px solid #E6EDF1",
        },
        "& > button": {
          flexShrink: 0,
        },
        "& [hidden]": {
          display: "none",
        },
        "&:first-child": {
          paddingLeft: "30px",
          paddingRight: "16px",
        },
        "&:last-child": {
          paddingRight: "30px",
          paddingLeft: "16px",
        },
      },
      paddingNone: {
        "&:first-child": {
          paddingLeft: 0,
          paddingRight: 0,
        },
        "&:last-child": {
          paddingRight: 0,
          paddingLeft: 0,
        },
        "& div > button": {
          color: "#828282",
          maxWidth: 38,
          maxHeight: 38,
        },
      },
      head: {
        color: "#828282",
        fontSize: "1.6rem",
        fontWeight: 400,
        "&$paddingCheckbox": {
          "&:last-child": {
            fontSize: 0,
            "& > *": {
              pointerEvents: "auto",
            },
          },
        },
        "@media (max-width: 767px)": {
          fontSize: "1.4rem",
        },
      },
      body: {
        wordBreak: "break-all",
      },
    },
    MuiButton: {
      root: {
        fontSize: "1.6rem",
        textTransform: "none",
        lineHeight: "1.7rem",
        "@media (max-width: 767px)": {
          fontSize: "1.4rem",
        },
        "&$disabled": {
          color: "inherit",
          '&[type="submit"]': {
            background: theme.palette.primary.light,
            color: theme.palette.primary.inverse,
          },
        },
      },
      outlined: {
        padding: "10px 23px",
        color: "#828282",
      },
      text: {
        padding: "12px 28px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.inverse,
        fontWeight: "500",
        lineHeight: "1em",
        textTransform: "none",
        whiteSpace: "nowrap",
        "@media (max-width: 767px)": {
          fontSize: "1.4rem",
        },
        '&[type="submit"]:hover': {
          backgroundColor: theme.palette.primary.hover,
        },
      },
      textPrimary: {
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.palette.primary.hover,
        },
        "&:disabled": {
          backgroundColor: "#E6EDF1",
          color: "#828282",
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: "1.4rem",
        width: "100%",
        "&$disabled": {
          color: "#B4BDC2",
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10.5px 20px",
        borderTop: "none",
      },
      root: {
        "& $notchedOutline": {
          borderColor: "#E6EDF1",
        },
        "&:hover $notchedOutline": {
          borderColor: "#E6EDF1",
        },
        "&$focused": {
          "& fieldset": { border: " 1px solid #B4BDC2 !important" },
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#fff",
        fontWeight: 400,
        fontSize: "16px",
        color: "#E6EDF1",
        "&$disabled": {
          "& fieldset": {
            border: 0,
          },
        },
      },
      input: {
        color: "#E6EDF1",
        borderColor: "#E6EDF1",
        '&[data-type="password"]': {
          paddingRight: "46px",
        },
      },
    },
    MuiInputAdornment: {
      root: {
        color: "#686868",
      },
      positionStart: {
        marginRight: 10,
        color: "#828282",
      },
    },
    MuiCheckbox: {
      root: {
        color: "#B4BDC2",
        "& .MuiIconButton-label": {},
      },
      colorPrimary: {
        "&$disabled": {
          color: "#E6EDF1",
        },
      },
      colorSecondary: {
        "&:hover": {
          background: "none",
        },
      },
    },
    MuiIconButton: {
      root: {
        alignSelf: "center",
        fontSize: 0,
        flexShrink: 0,
        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
      colorSecondary: {
        "&:hover": {
          backgroundColor: "#F9F9F9",
        },
      },
    },
    Mui: {
      root: {
        "&$checked": {
          "&:hover": {
            background: "none",
          },
        },
      },
    },
    MuiContainer: {
      root: {
        padding: "100px 32px 32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        background: theme.palette.bg,
        "@media (max-width: 767px)": {
          padding: "58px 0 70px",
        },
      },
    },
    MuiPaper: {
      elevation2: {
        boxShadow: "0px 5px 10px #EBEBEB",
      },
      rounded: {
        borderRadius: "2px",
      },
    },
  },
  // components: {
  //   MuiFilledInput: {
  //     styleOverrides: {
  //       root: {
  //         background: theme.palette.primary.main,
  //       },
  //     },
  //   },
  //   MuiToolbar: {
  //     regular: {
  //       backgroundColor: "#ffff00",
  //       color: "#000000",
  //       height: "32px",
  //       minHeight: "32px",
  //       "@media (min-width: 600px)": {
  //         minHeight: "48px",
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         background: theme.palette.secondary.main,
  //         border: 0,
  //         color: "white",
  //         padding: "0 30px",
  //         textTransform: "inherit",
  //         fontSize: theme.typography.button.fontSize,
  //         maxWidth: "280px",
  //         display: "flex",
  //         justifyContent: "center",
  //         borderRadius: "30px",
  //         fontWeight: theme.typography.button.fontWeight,
  //         fontFamily: theme.typography.button.fontFamily,
  //         "&:hover": {
  //           background: "#FFFFFF",
  //           backgroundColor: "FFFFFF",
  //           border: `1px solid ${theme.palette.secondary.main}`,
  //           color: theme.palette.secondary.main,
  //         },
  //         "&:active": {
  //           backgroundColor: "#08795A",
  //           color: "white",
  //         },
  //         "&:disabled": {
  //           color: "inherit",
  //           '&[type="submit"]': {
  //             background: theme.palette.primary.disabled,
  //             color: theme.palette.primary.inverse,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       html: {
  //         ...darkScrollbar(
  //           true
  //             ? {
  //                 track: theme.palette.primary.cardColor,
  //                 thumb: theme.palette.primary.main,
  //                 active: theme.palette.primary.main,
  //               }
  //             : undefined
  //         ),
  //         //scrollbarWidth for Firefox
  //         scrollbarWidth: "thin",
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         "&$focused .MuiIconButton": {
  //           borderColor: theme.palette.primary.inverse,
  //           backgroundColor: "white",
  //         },
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         fontFamily: "Mulish",
  //         color: theme.palette.primary.inverse,
  //         caretColor: theme.palette.primary.inverse,
  //         maxHeight: 52,
  //       },
  //     },
  //   },
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         border: "none",
  //         borderRadius: 5,
  //         width: "100%",
  //         "& .MuiOutlinedInput-root": {
  //           background: theme.palette.primary.backgroundLightGreen,
  //           "&:hover fieldset": {
  //             borderColor: theme.palette.primary.main,
  //           },
  //         },
  //         "&:hover": {
  //           borderColor: "transparent",
  //         },
  //         "&:focus": {
  //           borderColor: theme.palette.primary.main,
  //         },
  //       },
  //     },
  //   },
  //   MuiPaginationItem: {
  //     root: {
  //       margin: "0 -1px",
  //       fontSize: "1.4rem",
  //       minWidth: "34px",
  //       borderRadius: 0,
  //       "@media (max-width: 767px)": {
  //         fontSize: "1rem",
  //       },
  //     },
  //     page: {
  //       "&:hover": {},
  //       "&$selected": {},
  //       "@media (max-width: 767px)": {
  //         height: "32px",
  //       },
  //     },
  //   },
  //   MuiIconButton: {
  //     styleOverrides: {
  //       root: {
  //         color: "#949494",
  //       },
  //     },
  //   },
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         fontFamily: "Mulish",
  //       },
  //     },
  //   },
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: "none",
  //       },
  //     },
  //   },
  // },
});

console.log(theme, "theme");
// export const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
//   typography: {
//     fontFamily: roboto.style.fontFamily,
//   },

//   components: {
//     MuiTableBody: {
//       styleOverrides: {
//         root: {
//           background: "red", // Round those edges
//           // More overrides
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "8px", // Round those edges
//           // More overrides
//         },
//       },
//     },
//   },
// });
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    //  </NextAppDirEmotionCacheProvider>
  );
}
