import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },

  location: {
    "& .location-card": {},
    maxWidth: "300px",
    "&  .title": {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: "20px",
      color: "#5C6B62",
      borderBottom: "1px solid #CDD0BC",
    },
    "&  .description": {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: "17px",
      color: "#5C6B62",
      marginTop: "5px",
    },
  },

  defaultCircle: {
    strokeOpacity: "0.5",
    strokeWeight: "2",
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    fillColor: "rgba(255, 0, 0, 0.2)", // Adjust the fill color as needed
    strokeColor: "red", // Adjust the stroke color as needed
  },
  // const closeOptions = {
  //   ...defaultOptions,
  //   zIndex: 3,
  //   fillOpacity: 0.05,
  //   strokeColor: "#8BC34A",
  //   fillColor: "#8BC34A",
  // };
  // const middleOptions = {
  //   ...defaultOptions,
  //   zIndex: 2,
  //   fillOpacity: 0.05,
  //   strokeColor: "#FBC02D",
  //   fillColor: "#FBC02D",
  // };
}));

export default useStyles;
