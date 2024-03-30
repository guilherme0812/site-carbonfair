"use client";

import { DataGrid as DataGridMUI } from "@mui/x-data-grid";
import { styled, Theme } from "@mui/material/styles";

const DataGrid = styled(DataGridMUI)(({ theme }: { theme: Theme }) => ({
  fontSize: "12px",
  border: "none",

  "& .MuiDataGrid-columnHeader": {
    // fontWeight: "bold",
    backgroundColor: "transparent",
    height: "10px",
    color: theme.palette.text.primary,
    // marginBottom: theme.spacing(2),
    fontSize: "1rem",
    borderBottom: "1px solid #707070",
  },

  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
  },

  // "& .MuiDataGrid-aggregationColumnHeaderLabel": {
  //     fontWeight: "bold",
  // },

  "& .MuiDataGrid-cell": {
    border: "none",
    color: "#000000",
    fontSize: ".8rem",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },

  "& .MuiDataGrid-row": {
    backgroundColor: "transparent",
    borderBottom: "1px solid #707070",
  },

  ".MuiDataGrid-footerContainer": {
    border: "none",
  },
}));

export default DataGrid;
