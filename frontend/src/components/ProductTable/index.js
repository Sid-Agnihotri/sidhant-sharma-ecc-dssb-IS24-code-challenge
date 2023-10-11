import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductTable = ({
  setSelectedProduct,
  setDialogOpen,
  onDelete,
  productsData,
}) => {
  const handleEditButton = (e) => {
    setSelectedProduct(e);
    setDialogOpen(true);
  };

  const handleDeleteButton = async (product) => {
    onDelete(product); // Call the onDelete function
  };

  const columns = [
    { field: "productId", headerName: "Product ID", width: 130 },
    { field: "productName", headerName: "Product Name", width: 150 },
    { field: "scrumMaster", headerName: "Scrum Master", width: 150 },
    { field: "productOwner", headerName: "Product Owner", width: 150 },
    { field: "developers", headerName: "Developers", width: 280 },
    { field: "startDate", headerName: "Start Date", width: 150 },
    { field: "methodology", headerName: "Methodology", width: 150 },
    {
      field: "location",
      headerName: "Location (Github Repo)",
      width: 250,
      flex: 1,
      renderCell: (params) => (
        //   this opens the link a new tab
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div
            style={{
              margin: "40px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <EditIcon
              color="primary"
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={() => handleEditButton(params.row)}
            />
            <DeleteIcon
              color="error"
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteButton(params.row)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <DataGrid
      onCellDoubleClick={(e) => {
        setSelectedProduct(e.row);
        setDialogOpen(true);
      }}
      getRowId={(row) => row.productId}
      rows={productsData}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      sx={{ borderRadius: "20px" }}
    />
  );
};

export default ProductTable;
