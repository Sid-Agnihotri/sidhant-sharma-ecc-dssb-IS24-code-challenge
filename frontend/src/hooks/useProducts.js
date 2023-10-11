import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

const useProducts = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);

      setProductsData(response.data);
      return {
        data: response.data,
        status: response.status,
        success: true,
        statusText: response.statusText,
        message: "Product fetched successfully",
      };
    } catch (error) {
      console.error("Error fetching products: ", error.response.status);
      return {
        status: error.response.status,
        success: false,
        statusText: error.response.statusText,
        message: error.message || "Error fetching products.",
      };
    }
  };

  // Update Product
  const updateProduct = async (productId, updatedProduct) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/products/${productId}`,
        updatedProduct
      );
      setProductsData((prevProducts) =>
        prevProducts.map((p) => (p.productId === productId ? response.data : p))
      );
      return {
        status: response.status,
        success: true,
        statusText: response.statusText,
        message: "Product updated successfully",
      };
    } catch (error) {
      console.error("Error updating product: ", error);
      return {
        status: error.response.status,
        success: false,
        statusText: error.response.statusText,
        message: error.message || "Error updating product.",
      };
    }
  };
  // Add a Product
  const addProduct = async (product) => {
    try {
      const response = await axios.post(`${BASE_URL}/products`, product);

      await fetchProducts();
      return {
        status: response.status,
        success: true,
        statusText: response.statusText,
        message: "Product added successfully",
      };
    } catch (error) {
      console.error("Error adding product:", error);
      return {
        status: error.response.status,
        success: false,
        statusText: error.response.statusText,
        message: error.message || "Error updating product.",
      };
    }
  };

  // Delete product
  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/products/${productId}`);
      await fetchProducts();
      setProductsData((prevProducts) => {
        const updatedProducts = prevProducts.filter(
          (p) => p.productId !== productId
        );
        return updatedProducts;
      });
      return {
        status: response.status,
        success: true,
        statusText: response.statusText,
        message: "Product deleted successfully",
      };
    } catch (error) {
      console.log("Error deleting product: ", error);
      return {
        status: error.response.status,
        success: false,
        statusText: error.response.statusText,
        message: error.message || "Error deleting product.",
      };
    }
  };

  return {
    productsData,
    updateProduct,
    addProduct,
    deleteProduct,
  };
};

export default useProducts;
