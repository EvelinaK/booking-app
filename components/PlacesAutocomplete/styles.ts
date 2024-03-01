import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    "& input": {
      width: "100%",
      fontFamily: "Helvetica 25 UltraLight",
      border: "none",
      "&:focus-visible": {},

      padding: "15.5px 14px 15.5px 14px",
      lineHeight: "17px",
      fontSize: 14,
      fontWeight: 400,
      background: "#FFFFFF",
      borderRadius: "4px",
      color: "#5C6B62",
      backgroundImage: `url(${SearchIcon})`,
      paddingLeft: "55px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "15px center",
      outline: 0,
    },
    "& ul": {
      position: "absolute",
      zIndex: 10,
      backgroundColor: "white",
      width: "100%",
      listStyle: "none",
      fontFamily: "Helvetica 25 UltraLight",
      color: "#5C6B62",
      fontSize: 14,
      fontWeight: 700,
    },
    "& li": {
      fontFamily: "Helvetica 25 UltraLight",
      padding: "8px 16px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#c1abc024",
      },
    },
  },
}));

export default useStyles;
