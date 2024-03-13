import Select from "react-select";
import withStyles from "@mui/styles/withStyles";
import { makeStyles } from "@mui/styles";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import { perPageStyles } from "./styles";

const customStyles = {
  control: (styles, state) => ({
    ...styles,
    margin: "0 5px",
    width: 65,
    height: 40,
    minHeight: 32,
    borderRadius: 2,
    border: state.isDisabled
      ? 0
      : state.isFocused
      ? "1px solid #B4BDC2 !important"
      : "1px solid #E6EDF1 !important",
    boxShadow: "none",
    "@media (max-width: 767px)": {
      flexShrink: 0,
      width: "45px",
      height: 32,
    },
  }),
  menu: (styles) => ({
    ...styles,
    width: 65,
    margin: "0 5px",
    maxHeight: 120,
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    padding: "0 10px",
    color: "#828282",
    "@media (max-width: 767px)": {
      padding: "0 4px",
    },
  }),
  option: (styles, state) => ({
    ...styles,
    borderBottom: "0.5px solid #E6EDF1",
    "&:active": { background: "#F9F9F9" },
    background: state.isFocused ? "#F9F9F9" : "#FFF",
    color: state.isSelected && "#1E94D3",
    fontWeight: state.isSelected && 500,
    padding: "7px 14px",
    "&:last-child": {
      borderBottom: "none",
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    "@media (max-width: 767px)": {
      padding: "2px",
    },
  }),
};

const PerPage = ({ classes, styles, changed, ...props }) => {
  const changedComponents = {
    IndicatorSeparator: () => null,
    DropdownIndicator: ArrowDropDownOutlinedIcon,
  };
  return (
    <Select
      className={classes.select}
      styles={{ ...customStyles, ...styles }}
      components={changed ? changed : changedComponents}
      menuPlacement="auto"
      {...props}
    />
  );
};

export default withStyles(perPageStyles)(PerPage);
