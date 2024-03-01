import { makeStyles } from "@mui/styles";

import { Theme } from "@mui/material/styles";
import { StyleRules } from "@mui/styles/withStyles";

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    smalLocationCard: {
      minHeight: 600,
      height: "100%",
      "& .card-header": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      },

      "& .card-image": {
        "& img": {
          height: "227px",
          width: "100%",
          objectFit: "cover",
        },
      },
      "& .hide": {
        opacity: "0.5",
        cursor: "default",
        pointerEvents: "none",
        border: "1px solid #CDD0BC !important",
      },
      "& .card-info__handler": {
        display: "flex",
        justifyContent: " flex-end",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "0px",
        },
        "& > .red": {
          color: "#FF0000",
        },
        "& > svg": {
          marginLeft: "20px",
          marginRight: "24px",
          cursor: "pointer",
          color: "#5C6B62",
        },
      },

      "& .link-item": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: "21px",
        color: "#5C6B62",
        display: "flex",
        alignItems: "center",
        "& a": {
          marginRight: "10px",
        },
      },

      "& .card": {
        padding: "45px 32px 32px  32px",
        border: "1px solid #000000",
        borderRadius: "6px",
        height: "100%",
        minHeight: 460,
        [theme.breakpoints.down("sm")]: {
          padding: "18px 16px 24px  16px",
        },
      },

      "& .info-wrapper": {
        minHeight: "106px",
      },

      "& .info-title": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: "20px",
        color: "#5C6B62",
        borderBottom: "1px solid #CDD0BC",
        marginTop: "27px",
        paddingBottom: "12px",
      },
      "& .info-sub-title": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: "21px",
        color: "#5C6B62",
        margin: " 12px 0px 15px 0px",
      },

      "& .main-sub-title": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 24,
        lineHeight: "29px",
        color: "#5C6B62",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "32px",
        },
        marginTop: "8px",
        "&__value": {
          marginRight: "10px",
        },

        "&__icon": {
          marginRight: "10px",
          display: "flex",
        },
      },
      "& .info-title__box": {
        display: "flex",
        flexWrap: "wrap",
        margin: "10px 0px 24px 0px",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: "17px",
        color: "#5C6B62",
        maxWidth: "867px",
      },
      "& .info-title__list": {
        listStyle: "none",
      },
      "& .property-item": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: "17px",
        color: "#5C6B62",
        marginRight: "24px",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        "& > span": {
          marginLeft: "13px",
        },
      },
    },
    paper: {
      overflowY: "unset !important",
    },
    closeBtn: {
      position: "absolute !important",
      //   top: "-23px",
      //   left: "-23px",
      cursor: "pointer",
      zIndex: 10,
    },
    contentWrap: {
      padding: "0 !important",
    },
  })
);

export default useStyles;
