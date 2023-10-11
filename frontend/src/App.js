import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MuiAlert from "@mui/material/Alert";
import ProductTable from "./components/ProductTable";
import {
  Button,
  Box,
  Grid,
  Container,
  Typography,
  Snackbar,
} from "@mui/material";
import useProducts from "./hooks/useProducts";
import AddEditDialog from "./components/AddEditDialog";

const App = () => {
  const { updateProduct, addProduct, productsData, deleteProduct } =
    useProducts();

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  // Snackbar Handler
  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Save a product
  const handleSave = async (product) => {
    // if product.productId then it's an update and otherwise edit.
    let response = null;
    if (product.productId) {
      response = await updateProduct(product.productId, product);
    } else {
      response = await addProduct(product);
    }

    if (response.success) {
      showSnackbar(response.message, "success");
    } else {
      showSnackbar(response.message, "error");
    }
    setSnackbarOpen(true);
  };

  // Delete product

  const handleDeleteButton = async (product) => {
    const response = await deleteProduct(product.productId);
    if (response.success) {
      showSnackbar(response.message, "success");
    } else {
      showSnackbar(response.message, "error");
    }
  };

  // Search a product

  useEffect(() => {
    if (searchTerm.trim() === "") {
      // show all products if no search
      setFilteredProducts(productsData);
    } else {
      const searchWords = searchTerm.trim().toLowerCase().split(" ");
      const filtered = productsData.filter((product) => {
        return searchWords.some(
          (word) =>
            product.scrumMaster
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.developers.some((developer) =>
              developer.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
      });
      setFilteredProducts(filtered);
    }
  }, [searchTerm, productsData]);

  return (
    <Container maxWidth="xl">
      <Box mt={8}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          mb={2}
        >
          <Grid item xs={12} mb={4}>
            <Typography align="center" variant="h2">
              BC Services Project Record Application
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <SearchBar
              onSearch={(term) => {
                setSearchTerm(term);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setSelectedProduct(null);
                setDialogOpen(true);
              }}
            >
              Add New Product
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ProductTable
              setDialogOpen={setDialogOpen}
              setSelectedProduct={setSelectedProduct}
              showSnackbar={showSnackbar}
              productsData={filteredProducts}
              onDelete={handleDeleteButton}
            />
          </Grid>
          <AddEditDialog
            open={dialogOpen}
            onClose={() => {
              setDialogOpen(false);
            }}
            onSave={handleSave}
            product={selectedProduct}
          />
        </Grid>
      </Box>
      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onChange={handleSnackbarClose}
      >
        <MuiAlert
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
          onClose={handleSnackbarClose}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default App;
