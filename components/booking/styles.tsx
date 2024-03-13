import { makeStyles } from "@mui/styles";
import withStyles from "@mui/styles/withStyles";
export default withStyles((theme) => ({
  wrapper: {
    margin: "auto -15px 0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "&.table-footer": {
      padding: "30px 0 0",
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        padding: "20px 16px 0",
        display: "flex",
        justifyContent: "center",
      },
    },
    "& ul": {
      border: `1px solid ${theme.palette.borders.main}`,
      borderRadius: "2px",
      overflow: "hidden",
      "& svg": {
        color: theme.palette.primary.main,
      },
    },
    "& > button": {
      borderRadius: 0,
      border: "none",
      borderRight: `1px solid ${theme.palette.borders.main}`,
      background: "#FFF",
      borderBottom: "2px solid transparent",
      "&.Mui-selected": {
        background: "#FFF",
        borderBottom: `2px solid ${theme.palette.link.main}`,
      },
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: " 0 -5px",
      flexWrap: "wrap",
      fontSize: "10px",
      "& div > div": {
        fontSize: "10px",
        "& svg": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  perPageWrapper: {
    margin: "0 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: " 0 5px 10px",
    },
  },
}));

export const perPageStyles = () =>
  makeStyles({
    select: {
      width: "auto",
    },
  });
