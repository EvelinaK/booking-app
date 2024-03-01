import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: " #F0F1EA",
    padding: "63px",
    height: "100%",
    // [theme.breakpoints.down("md")]: {
    //   padding: "32px",
    //   paddingTop: "63px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "16px",
    //   paddingTop: "63px",
    // },

    "& .list-wrapper": {
      color: "#5C6B62",
      listStyle: "none",
      display: "flex",
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
      "&:last-child": {
        marginBottom: 0,
      },
    },

    "& .info-title__list": {
      listStyle: "none",
      minWidth: "415px",
      "& li": {
        fontFamily: "Helvetica 25 UltraLight",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: "17px",
        color: "#5C6B62",
      },
    },
    "& .info-title": {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: "20px",
      color: "#5C6B62",
      borderBottom: "1px solid #CDD0BC",
      marginTop: "30px",
    },
    "& .location-map": {
      marginBottom: "18px",
      height: "500px",

      "& > img": {
        maxHeight: "500px",
        width: "100%",
        objectFit: "cover",
      },
    },
  },
  inputWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    flexDirection: "column",
    alignItems: "center",

    "& > div": {
      maxWidth: "600px",
      width: "100%",
      display: "flex",
    },
    "&  .list-container": {
      width: "100%",

      "& > ul": {
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 16,
        lineHeight: "20px",
        marginTop: "24px",
        maxWidth: "600px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        // flexWrap: "wrap",

        "& span": {
          marginLeft: "12px",
        },
        "& li": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
          marginLeft: "10px",
        },
      },
    },
  },
  closeBtn: {
    position: "absolute",
    top: " 0px",
    right: "0px",
    color: " #5C6B62",
    width: "24px",
    height: "24px",
    "&:hover": {
      color: "#AD9742",
    },
    cursor: "pointer",
  },
  iconButton: {
    margin: "0 0 15px 0",
    width: 60,
    height: 60,
    borderRadius: "50%",
    // [theme.breakpoints.down(theme.breakpoints.values.sm)]: {},
    // [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
    //   margin: "0 4px 0 16px",
    //   width: "50%",
    // },
    // [theme.breakpoints.down(321)]: {
    //   width: 140,
    // },
  },
  title: {
    marginBottom: "50px",
    position: "relative",
  },
}));

export default useStyles;
