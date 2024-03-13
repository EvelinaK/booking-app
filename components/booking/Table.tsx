import MuiPaper from "@mui/material/Paper";
import withStyles from "@mui/styles/withStyles";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
import MaterialTable from "material-table";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import { createElement } from "react";
import MuiPagination from "@mui/material/Pagination";
import Select, { SelectComponents, GroupBase } from "react-select";
import { withStyles as stylesWithStyles } from "@mui/styles";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import styles from "./styles";

type StyleFunction = (
  styles: React.CSSProperties,
  state?: any
) => React.CSSProperties;

interface CustomStyles {
  control?: StyleFunction;
  menu?: StyleFunction;
  indicatorsContainer?: StyleFunction;
  option?: StyleFunction;
  valueContainer?: StyleFunction;
}

interface PerPageComponentProps {
  classes?: Record<string, string>;
  styles?: CustomStyles;
  changed: boolean;
  [key: string]: any;
}

interface PaginationComponentProps {
  total: number;
  page: number;
  perPage: number;
  rowsPerPageOptions?: number[];
  onPageChange: (e: any, newPage?: number) => void;
  onPerPageChange: (e: any) => void;
  type?: string;
  list?: any[];
  withTable?: boolean;
  backendPagination?: boolean;
  classes: Record<string, string>;
  className: string;
  [key: string]: any;
}

interface TableProps {
  className: string;
  classes: Record<string, string>;
  options: any;
  withShadow?: boolean;
  components: any;
  emptyTableText: string;
  withTable: boolean;
  backendPagination: boolean;
  [key: string]: any;
}

const Paper = withStyles({
  root: {
    margin: "0 0 30px",
    background: "transparent",
    boxShadow: "none",
    "@media (max-width: 767px)": {
      margin: "0 0 0px",
    },
  },
})(MuiPaper);

const defaultOptions = {
  search: false,
  actionsColumnIndex: -1,
  toolbar: false,
  draggable: false,
  defaultExpanded: () => {
    // Your logic to determine if the row should be initially expanded or not
    {
    } // Replace with your actual condition
  },
  emptyRowsWhenPaging: false,
  selectionProps: {
    color: "primary",
  },
  headerSelectionProps: {
    color: "primary",
  },
  pageSize: 10,
  pageSizeOptions: [10, 25, 100],
  actionsCellStyle: {
    color: "#828282",
    fontSize: "1.4rem",
  },
  sorting: true,
};

const defaultPerPage = [10, 25, 100];

const customStyles: CustomStyles = {
  control: (styles, state) => ({
    ...styles,
    margin: "0 5px",
    width: 65,
    height: 40,
    minHeight: 32,
    borderRadius: 2,
    border: state?.isDisabled
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

const PerPageComponent: React.FC<PerPageComponentProps> = ({
  classes,
  styles,
  changed,
  ...props
}) => {
  // const changedComponents = {
  //   IndicatorSeparator: () => null,
  //   DropdownIndicator: ArrowDropDownOutlinedIcon,
  // };

  const mergeComponents = (
    changedComponents: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName?: string;
    }
  ) => ({
    IndicatorSeparator: () => null,
    DropdownIndicator: ArrowDropDownOutlinedIcon,
    ...changedComponents,
  });

  const components:
    | Partial<SelectComponents<unknown, false, GroupBase<unknown>>>
    | undefined = changed
    ? {
        IndicatorSeparator: () => null,
        DropdownIndicator: (props: any) => (
          <ArrowDropDownOutlinedIcon {...props} />
        ),
      }
    : undefined;

  return (
    <Select
      className={classes?.select}
      styles={{ ...customStyles, ...styles }}
      components={components}
      menuPlacement="auto"
      {...props}
    />
  );
};

const PaginationContent = withStyles((theme) => ({
  root: {
    margin: "0 15px",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: "0 5px 10px",
    },
  },
  ul: {
    flexWrap: "nowrap",
  },
}))(MuiPagination);

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  total,
  page,
  perPage,
  rowsPerPageOptions = defaultPerPage,
  onPageChange,
  onPerPageChange,
  type = "div",
  list = [],
  withTable,
  backendPagination,
  classes,
  className,
  ...rest
}) => {
  const count = Math.ceil(total / perPage);

  const cnWrapper = clsx(
    classes?.wrapper,
    { "table-footer": withTable },
    className
  );

  const handleChangePage = (e, newPage) => {
    if (withTable) {
      onPageChange(e, newPage - 1);
    } else onPageChange(newPage - 1);
  };

  const handlerChangePerPage = ({ value }) => {
    if (withTable) {
      const e = { target: { value: Number(value) } };
      onPerPageChange(e);
    } else {
      onPerPageChange(+value);
      !backendPagination && onPageChange(0);
    }
  };

  return (
    <>
      <div className={classes?.perPageWrapper}>
        <PerPageComponent
          classes={undefined}
          styles={undefined}
          changed={false}
          label=""
          value={{ value: perPage, label: perPage }}
          onChange={handlerChangePerPage}
          options={rowsPerPageOptions.map((el) => ({ value: el, label: el }))}
          list={list}
          {...rest}
        />
        <span>{"shared:per_page"}</span>
      </div>

      <PaginationContent
        variant="text"
        siblingCount={1}
        page={++page}
        count={count}
        onChange={handleChangePage}
      />
    </>
  );
};

const Table: React.FC<any> = ({
  className,
  classes,
  options,
  withShadow = true,
  components,
  emptyTableText,
  withTable,
  backendPagination,
  ...prop
}) => {
  const allOptions = options
    ? { ...defaultOptions, ...options }
    : defaultOptions;

  const cn = clsx(className);
  const alignedColumns = prop.columns && prop.columns?.map((column) => column);

  const count = Math.ceil(prop.count / prop.rowsPerPage);

  const cnWrapper = clsx(
    classes?.wrapper,
    { "table-footer": withTable },
    className
  );

  const handleChangePage = (e, newPage) => {
    if (withTable) {
      prop.onChangePage(e, newPage - 1);
    } else prop.onChangePage(newPage - 1);
  };

  const handlerChangePerPage = (props) => {
    if (withTable) {
      const e = { target: { value: Number(value) } };
      prop.onChangeRowsPerPage(e);
    } else {
      prop.onChangeRowsPerPage(+value);
      !backendPagination && prop.onChangePage(0);
    }
  };

  return (
    <div className={cn}>
      <MaterialTable
        localization={{
          body: {
            emptyDataSourceMessage: emptyTableText
              ? emptyTableText
              : "No records to display",
          },
        }}
        {...prop}
        columns={alignedColumns}
        options={allOptions}
        hover={true}
        sorting={true}
        components={{
          ...components,
          Container: ({ children, ...props }) => {
            const childrenFiltered = children.filter((el, i) => i !== 4);
            return (
              <>
                <Paper
                  className="main-table"
                  {...props}
                  children={childrenFiltered}
                  elevation={withShadow ? 2 : 0}
                />
                {children[4]}
              </>
            );
          },
          Pagination: (props) => (
            <PaginationComponent
              withTable
              type="td"
              onPageChange={props.onChangePage}
              onPerPageChange={props.onChangeRowsPerPage}
              page={props.page}
              total={props.count}
              rowsPerPageOptions={props.rowsPerPageOptions}
              perPage={props.rowsPerPage}
              classes={undefined}
              className={""}
            />
          ),
        }}
        icons={{
          Delete: () => <DeleteOutlineOutlinedIcon />,
          Edit: () => <EditOutlinedIcon />,
          SortArrow: () => <SwapVertOutlinedIcon />,
        }}
      />
    </div>
  );
};

export default Table;
// import React from "react";
// import MuiPaper from "@mui/material/Paper";
// import withStyles from "@mui/styles/withStyles";
// import { useTheme } from "@mui/material/styles";
// import clsx from "clsx";
// import MaterialTable, { MaterialTableProps, Column } from "material-table";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
// import { createElement } from "react";
// import MuiPagination from "@mui/material/Pagination";
// import Select from "react-select";
// import { withStyles as stylesWithStyles } from "@mui/styles";
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

// import styles from "./styles";

// interface CustomStyles {
//   control: React.CSSProperties;
//   menu: React.CSSProperties;
//   indicatorsContainer: React.CSSProperties;
//   option: React.CSSProperties;
//   valueContainer: React.CSSProperties;
// }

// interface PerPageComponentProps {
//   classes: Record<string, string>;
//   styles: CustomStyles;
//   changed: boolean;
//   [key: string]: any;
// }

// interface PaginationProps {
//   onChangePage: (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     page: number
//   ) => void;
//   onRowsPerPageChange: (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   page: number;
//   count: number;
//   rowsPerPageOptions: number[];
//   rowsPerPage: number;
// }

// interface PaginationComponentProps {
//   total: number;
//   page: number;
//   perPage: number;
//   rowsPerPageOptions?: number[];
//   onPageChange: (e: any, newPage: number) => void;
//   onPerPageChange: (e: any) => void;
//   type?: string;
//   list?: any[];
//   withTable?: boolean;
//   backendPagination?: boolean;
//   classes: Record<string, string>;
//   className: string;
//   [key: string]: any;
// }

// interface CustomTableProps<T extends object> extends MaterialTableProps<T> {
//   className: string;
//   classes: Record<string, string>;
//   options: any;
//   withShadow?: boolean;
//   // components: any;
//   emptyTableText: string;
//   withTable: boolean;
//   backendPagination: boolean;
//   [key: string]: any;
//   rowsPerPage?: number;
//   components?: {
//     Pagination?: React.ComponentType<PaginationProps>;
//     // ... (other components)
//   };
// }

// const Paper = withStyles({
//   root: {
//     margin: "0 0 30px",
//     background: "transparent",
//     boxShadow: "none",
//     "@media (max-width: 767px)": {
//       margin: "0 0 0px",
//     },
//   },
// })(MuiPaper);

// const defaultOptions = {
//   search: false,
//   actionsColumnIndex: -1,
//   toolbar: false,
//   draggable: false,
//   emptyRowsWhenPaging: false,
//   selectionProps: {
//     color: "primary",
//   },
//   headerSelectionProps: {
//     color: "primary",
//   },
//   pageSize: 10,
//   pageSizeOptions: [10, 25, 100],
//   actionsCellStyle: {
//     color: "#828282",
//     fontSize: "1.4rem",
//   },
//   sorting: true,
// };
// const defaultPerPage = [10, 25, 100];

// const customStyles: CustomStyles = {
//   control: (styles, state) => ({
//     ...styles,
//     margin: "0 5px",
//     width: 65,
//     height: 40,
//     minHeight: 32,
//     borderRadius: 2,
//     border: state.isDisabled
//       ? 0
//       : state.isFocused
//       ? "1px solid #B4BDC2 !important"
//       : "1px solid #E6EDF1 !important",
//     boxShadow: "none",
//     "@media (max-width: 767px)": {
//       flexShrink: 0,
//       width: "45px",
//       height: 32,
//     },
//   }),
//   menu: (styles) => ({
//     ...styles,
//     width: 65,
//     margin: "0 5px",
//     maxHeight: 120,
//   }),
//   indicatorsContainer: (styles) => ({
//     ...styles,
//     padding: "0 10px",
//     color: "#828282",
//     "@media (max-width: 767px)": {
//       padding: "0 4px",
//     },
//   }),
//   option: (styles, state) => ({
//     ...styles,
//     borderBottom: "0.5px solid #E6EDF1",
//     "&:active": { background: "#F9F9F9" },
//     background: state.isFocused ? "#F9F9F9" : "#FFF",
//     color: state.isSelected && "#1E94D3",
//     fontWeight: state.isSelected && 500,
//     padding: "7px 14px",
//     "&:last-child": {
//       borderBottom: "none",
//     },
//   }),
//   valueContainer: (styles) => ({
//     ...styles,
//     "@media (max-width: 767px)": {
//       padding: "2px",
//     },
//   }),
// };

// const PerPageComponent: React.FC<PerPageComponentProps> = ({
//   classes,
//   styles,
//   changed,
//   ...props
// }) => {
//   const changedComponents = {
//     IndicatorSeparator: () => null,
//     DropdownIndicator: ArrowDropDownOutlinedIcon,
//   };
//   return (
//     <Select
//       className={classes?.select}
//       styles={{ ...customStyles, ...styles }}
//       components={changed ? changed : changedComponents}
//       menuPlacement="auto"
//       {...props}
//     />
//   );
// };

// const PaginationContent = withStyles((theme) => ({
//   root: {
//     margin: "0 15px",
//     [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
//       margin: "0 5px 10px",
//     },
//   },
//   ul: {
//     flexWrap: "nowrap",
//   },
// }))(MuiPagination);

// const PaginationComponent: React.FC<PaginationComponentProps> = ({
//   total,
//   page,
//   perPage,
//   rowsPerPageOptions = defaultPerPage,
//   onPageChange,
//   onPerPageChange,
//   type = "div",
//   list = [],
//   withTable,
//   backendPagination,
//   classes,
//   className,
//   ...rest
// }) => {
//   const count = Math.ceil(total / perPage);

//   const cnWrapper = clsx(
//     classes?.wrapper,
//     { "table-footer": withTable },
//     className
//   );

//   const handleChangePage = (e, newPage) => {
//     if (withTable) {
//       onPageChange(e, newPage - 1);
//     } else onPageChange(newPage - 1);
//   };

//   const handlerChangePerPage = ({ value }) => {
//     if (withTable) {
//       const e = { target: { value: Number(value) } };
//       onPerPageChange(e);
//     } else {
//       onPerPageChange(+value);
//       !backendPagination && onPageChange(0);
//     }
//   };

//   return (
//     <>
//       <div className={classes?.perPageWrapper}>
//         <PerPageComponent
//           label=""
//           value={{ value: perPage, label: perPage }}
//           onChange={handlerChangePerPage}
//           options={rowsPerPageOptions.map((el) => ({ value: el, label: el }))}
//           list={list}
//           {...rest}
//         />
//         <span>{"shared:per_page"}</span>
//       </div>

//       <PaginationContent
//         variant="text"
//         siblingCount={1}
//         page={++page}
//         count={count}
//         onChange={handleChangePage}
//       />
//     </>
//   );
// };

// // const Table: React.FC<MaterialTableProps>
// const Table: React.FC<CustomTableProps> = ({
//   className,
//   classes,
//   options,
//   withShadow = true,
//   components,
//   emptyTableText,
//   withTable,
//   backendPagination,
//   ...prop
// }) => {
//   const allOptions = options
//     ? { ...defaultOptions, ...options }
//     : defaultOptions;

//   const cn = clsx(className);
//   const alignedColumns = prop.columns && prop.columns?.map((column) => column);

//   const count = Math.ceil(prop.count / prop.rowsPerPage);

//   const cnWrapper = clsx(
//     classes?.wrapper,
//     { "table-footer": withTable },
//     className
//   );

//   const handleChangePage = (e, newPage) => {
//     if (withTable) {
//       prop.onChangePage(e, newPage - 1);
//     } else prop.onChangePage(newPage - 1);
//   };

//   const handlerChangePerPage = (props) => {
//     if (withTable) {
//       const e = { target: { value: Number(value) } };
//       prop.onRowsPerPageChange(e);
//     } else {
//       prop.onRowsPerPageChange(+value);
//       !backendPagination && prop.onChangePage(0);
//     }
//   };

//   return (
//     <div className={cn}>
//       <MaterialTable
//         localization={{
//           body: {
//             emptyDataSourceMessage: emptyTableText
//               ? emptyTableText
//               : "No records to display",
//           },
//         }}
//         {...prop}
//         columns={alignedColumns}
//         options={allOptions}
//         components={{
//           ...components,
//           Container: ({ children, ...props }) => {
//             const childrenFiltered = children.filter((el, i) => i !== 4);
//             return (
//               <>
//                 <Paper
//                   className="main-table"
//                   {...props}
//                   children={childrenFiltered}
//                   elevation={withShadow ? 2 : 0}
//                 />
//                 {children[4]}
//               </>
//             );
//           },
//           Pagination: (props: PaginationProps) => (
//             <>
//               <PaginationComponent
//                 withTable
//                 type="td"
//                 onPageChange={props.onChangePage}
//                 onPerPageChange={props.onRowsPerPageChange}
//                 page={props.page}
//                 total={props.count}
//                 rowsPerPageOptions={props.rowsPerPageOptions}
//                 perPage={props.perPage}
//               />
//             </>
//           ),
//         }}
//         defaultExpanded={true}
//         icons={{
//           Delete: () => <DeleteOutlineOutlinedIcon />,
//           Edit: () => <EditOutlinedIcon />,
//           SortArrow: () => <SwapVertOutlinedIcon />,
//         }}
//       />
//     </div>
//   );
// };

// export default Table;

// import React, { useEffect, useState } from "react";
// // import MuiPaper from "@mui/material/Paper";
// import withStyles from "@mui/styles/withStyles";
// import clsx from "clsx";
// import MaterialTable, { MaterialTableProps, Column } from "material-table";

// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
// import { Paper as MuiPaper } from "@mui/material";
// import MuiPagination from "@mui/material/Pagination";
// //import PaginationComponent from "./PaginationComponent"; // Import your PaginationComponent from the correct path
// import { createElement } from "react";
// import Select from "react-select";
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import styles from "./styles";

// interface CustomStyles {
//   control: React.CSSProperties;
//   menu: React.CSSProperties;
//   indicatorsContainer: React.CSSProperties;
//   option: React.CSSProperties;
//   valueContainer: React.CSSProperties;
// }

// interface PerPageComponentProps {
//   classes: Record<string, string>;
//   styles: CustomStyles;
//   changed: boolean;
//   [key: string]: any;
// }

// interface PaginationProps {
//   onPageChange?: (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     page: number
//   ) => void;

//   onRowsPerPageChange?: (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   page: number;
//   count: number;
//   rowsPerPageOptions: number[];
//   rowsPerPage: number;
// }

// interface PaginationComponentProps {
//   total: number;
//   page: number;
//   perPage: number;
//   rowsPerPageOptions?: number[];
//   onPageChange?: (e: any, newPage: number) => void;
//   onPerPageChange?: (e: any) => void;
//   type?: string;
//   list?: any[];
//   withTable?: boolean;
//   backendPagination?: boolean;
//   classes: Record<string, string>;
//   className: string;
//   [key: string]: any;
// }

// interface CustomTableProps<T extends object> extends MaterialTableProps<T> {
//   className: string;
//   classes: Record<string, string>;
//   options: any;
//   withShadow?: boolean;
//   emptyTableText: string;
//   withTable: boolean;
//   backendPagination: boolean;
//   [key: string]: any;
//   rowsPerPage?: number;
//   components?: {
//     Pagination?: React.ComponentType<PaginationProps>;
//   };
// }

// const Paper = withStyles({
//   root: {
//     margin: "0 0 30px",
//     background: "transparent",
//     boxShadow: "none",
//     "@media (max-width: 767px)": {
//       margin: "0 0 0px",
//     },
//   },
// })(MuiPaper);

// const defaultOptions = {
//   search: false,
//   actionsColumnIndex: -1,
//   toolbar: false,
//   draggable: false,
//   emptyRowsWhenPaging: false,
//   selectionProps: {
//     color: "primary",
//   },
//   headerSelectionProps: {
//     color: "primary",
//   },
//   pageSize: 10,
//   pageSizeOptions: [10, 25, 100],
//   actionsCellStyle: {
//     color: "#828282",
//     fontSize: "1.4rem",
//   },
//   sorting: true,
// };
// const defaultPerPage = [10, 25, 100];

// const customStyles: CustomStyles = {
//   control: (styles, state) => ({
//     ...styles,
//     margin: "0 5px",
//     width: 65,
//     height: 40,
//     minHeight: 32,
//     borderRadius: 2,
//     border: state.isDisabled
//       ? 0
//       : state.isFocused
//       ? "1px solid #B4BDC2 !important"
//       : "1px solid #E6EDF1 !important",
//     boxShadow: "none",
//     "@media (max-width: 767px)": {
//       flexShrink: 0,
//       width: "45px",
//       height: 32,
//     },
//   }),
//   menu: (styles) => ({
//     ...styles,
//     width: 65,
//     margin: "0 5px",
//     maxHeight: 120,
//   }),
//   indicatorsContainer: (styles) => ({
//     ...styles,
//     padding: "0 10px",
//     color: "#828282",
//     "@media (max-width: 767px)": {
//       padding: "0 4px",
//     },
//   }),
//   option: (styles, state) => ({
//     ...styles,
//     borderBottom: "0.5px solid #E6EDF1",
//     "&:active": { background: "#F9F9F9" },
//     background: state.isFocused ? "#F9F9F9" : "#FFF",
//     color: state.isSelected && "#1E94D3",
//     fontWeight: state.isSelected && 500,
//     padding: "7px 14px",
//     "&:last-child": {
//       borderBottom: "none",
//     },
//   }),
//   valueContainer: (styles) => ({
//     ...styles,
//     "@media (max-width: 767px)": {
//       padding: "2px",
//     },
//   }),
// };

// const PerPageComponent: React.FC<PerPageComponentProps> = ({
//   classes,
//   styles,
//   changed,
//   ...props
// }) => {
//   const changedComponents = {
//     IndicatorSeparator: () => null,
//     DropdownIndicator: ArrowDropDownOutlinedIcon,
//   };
//   return (
//     <Select
//       className={classes?.select}
//       styles={{ ...customStyles, ...styles }}
//       components={changed ? changed : changedComponents}
//       menuPlacement="auto"
//       {...props}
//     />
//   );
// };

// const PaginationContent = withStyles((theme) => ({
//   root: {
//     margin: "0 15px",
//     [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
//       margin: "0 5px 10px",
//     },
//   },
//   ul: {
//     flexWrap: "nowrap",
//   },
// }))(MuiPagination);

// const PaginationComponent: React.FC<PaginationComponentProps> = ({
//   total,
//   page,
//   perPage,
//   rowsPerPageOptions = defaultPerPage,
//   onPageChange,
//   onPerPageChange,
//   type = "div",
//   list = [],
//   withTable,
//   backendPagination,
//   classes,
//   className,
//   ...rest
// }) => {
//   const count = Math.ceil(total / perPage);

//   const cnWrapper = clsx(
//     classes?.wrapper,
//     { "table-footer": withTable },
//     className
//   );

//   const handleChangePage = (e, newPage) => {
//     if (withTable) {
//       onPageChange(e, newPage - 1);
//     } else onPageChange(newPage - 1);
//   };

//   const handlerChangePerPage = ({ value }) => {
//     if (withTable) {
//       const e = { target: { value: Number(value) } };
//       onPerPageChange(e);
//     } else {
//       onPerPageChange(+value);
//       !backendPagination && onPageChange(0);
//     }
//   };

//   return (
//     <>
//       <div className={classes?.perPageWrapper}>
//         <PerPageComponent
//           label=""
//           value={{ value: perPage, label: perPage }}
//           onChange={handlerChangePerPage}
//           options={rowsPerPageOptions.map((el) => ({ value: el, label: el }))}
//           list={list}
//           {...rest}
//         />
//         <span>{"shared:per_page"}</span>
//       </div>

//       <PaginationContent
//         variant="text"
//         siblingCount={1}
//         page={++page}
//         count={count}
//         onChange={handleChangePage}
//       />
//     </>
//   );
// };

// const Table: React.FC<CustomTableProps> = ({
//   className,
//   classes,
//   options,
//   withShadow = true,
//   components,
//   emptyTableText,
//   withTable,
//   backendPagination,
//   ...prop
// }) => {
//   const allOptions = options
//     ? { ...defaultOptions, ...options }
//     : defaultOptions;

//   const cn = clsx(className);
//   const alignedColumns = prop.columns && prop.columns?.map((column) => column);

//   const count = Math.ceil(prop.count / prop.rowsPerPage);

//   const cnWrapper = clsx(
//     classes?.wrapper,
//     { "table-footer": withTable },
//     className
//   );

//   return (
//     <div className={cn}>
//       <MaterialTable
//         localization={{
//           body: {
//             emptyDataSourceMessage: emptyTableText
//               ? emptyTableText
//               : "No records to display",
//           },
//         }}
//         {...prop}
//         columns={alignedColumns}
//         options={allOptions}
//         components={{
//           ...components,
//           Container: ({ children, ...props }) => {
//             const childrenFiltered = children.filter((el, i) => i !== 4);
//             return (
//               <>
//                 <Paper
//                   className="main-table"
//                   {...props}
//                   children={childrenFiltered}
//                   elevation={withShadow ? 2 : 0}
//                 />
//                 {children[4]}
//               </>
//             );
//           },
//           Pagination: (props: PaginationProps) => (
//             <PaginationComponent
//               withTable
//               type="td"
//               onPageChange={props.onChangePage}
//               onPerPageChange={props.onRowsPerPageChange}
//               page={props.page}
//               total={props.count}
//               rowsPerPageOptions={props.rowsPerPageOptions}
//               perPage={props.perPage}
//             />
//           ),
//         }}
//         defaultExpanded={true}
//         hover={true}
//         sorting={true}
//         icons={{
//           Delete: () => <DeleteOutlineOutlinedIcon />,
//           Edit: () => <EditOutlinedIcon />,
//           SortArrow: () => <SwapVertOutlinedIcon />,
//         }}
//       />
//     </div>
//   );
// };

// export default Table;
