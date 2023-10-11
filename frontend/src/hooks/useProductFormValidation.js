import { useState } from "react";

const validateProductForm = (localProduct) => {
  let validationErrors = {};

  const requiredFields = [
    "productName",
    "scrumMaster",
    "productOwner",
    "methodology",
    "startDate",
    "location",
  ];
  requiredFields.forEach((field) => {
    if (!localProduct[field])
      validationErrors[field] = "This field is required";
  });
  localProduct.developers.forEach((dev, index) => {
    if (!dev)
      validationErrors[`developers${index + 1}`] = "This field is required";
  });
  return validationErrors;
};

export const useProductFormValidation = () => {
  const [errors, setErrors] = useState({});
  const isValid = (localProduct) => {
    const validationErrors = validateProductForm(localProduct);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return { errors, setErrors, isValid };
};
