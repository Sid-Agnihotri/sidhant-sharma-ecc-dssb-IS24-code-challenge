import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  FormHelperText,
} from "@mui/material";
import { useProductFormValidation } from "../../hooks/useProductFormValidation";

const defaultProduct = {
  productId: "",
  productName: "",
  productOwner: "",
  developers: [],
  scrumMaster: "",
  startDate: "",
  methodology: "",
  location: "",
};

const mapProductToState = (product = {}) => {
  product = product || {};
  let result = {};

  for (let key in defaultProduct) {
    result[key] =
      product[key] !== undefined ? product[key] : defaultProduct[key];
  }

  return result;
};

const AddEditDialog = ({ open, onClose, onSave, product }) => {
  const [productData, setProductData] = useState(mapProductToState(product));

  useEffect(() => {
    setProductData(mapProductToState(product));
  }, [product]);

  const { errors, isValid, setErrors } = useProductFormValidation();

  const handleSaveClick = () => {
    if (isValid(productData)) {
      // Removing the productId when it's a new product
      let dataToSend = { ...productData };
      if (!product) {
        delete dataToSend.productId;
      }
      onSave(dataToSend);
      onClose();
    } else console.warn("There are validation errors.");
  };
  const handleClose = () => {
    onClose();
    setProductData(mapProductToState(product));

    setErrors({});
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Product Name"
              value={productData.productName}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  productName: e.target.value,
                })
              }
              fullWidth
              required
              error={!!errors.productName}
              helperText={errors.productName}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Scrum Master"
              value={productData.scrumMaster}
              error={!!errors.scrumMaster}
              helperText={errors.scrumMaster}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  scrumMaster: e.target.value,
                })
              }
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Product Owner"
              value={productData.productOwner}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  productOwner: e.target.value,
                })
              }
              fullWidth
              error={!!errors.productOwner}
              helperText={errors.productOwner}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth error={!!errors.methodology}>
              <InputLabel>Methodology</InputLabel>
              <Select
                value={productData.methodology}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    methodology: e.target.value,
                  })
                }
              >
                <MenuItem value={"Agile"}>Agile</MenuItem>
                <MenuItem value={"Waterfall"}>Waterfall</MenuItem>
              </Select>
              {errors.methodology && (
                <FormHelperText>{errors.methodology}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {Array(5)
            .fill()
            .map((_, index) => (
              <Grid item xs={6} key={index}>
                <TextField
                  label={`Developer ${index + 1}`}
                  value={productData.developers[index] || ""}
                  onChange={(e) => {
                    const updatedDevelopers = [...productData.developers];
                    updatedDevelopers[index] = e.target.value;
                    setProductData({
                      ...productData,
                      developers: updatedDevelopers,
                    });
                  }}
                  fullWidth
                  error={!!errors.developers && !!errors.developers[index]}
                  helperText={errors.developers ? errors.developers[index] : ""}
                />
              </Grid>
            ))}

          <Grid item xs={6}>
            <TextField
              label="Start Date"
              type="date"
              error={!!errors.startDate}
              helperText={errors.startDate}
              InputLabelProps={{ shrink: true }}
              value={productData.startDate}
              onChange={(e) =>
                setProductData({ ...productData, startDate: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Location (GitHub Repository Link)"
              value={productData.location}
              onChange={(e) =>
                setProductData({ ...productData, location: e.target.value })
              }
              fullWidth
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="inherit" variant="contained">
          Cancel
        </Button>
        <Button onClick={handleSaveClick} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditDialog;
