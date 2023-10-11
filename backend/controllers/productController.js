const products = require("../data/product");
const Joi = require("joi");

// Schema
const productSchema = Joi.object({
  productId: Joi.number().required(),
  productName: Joi.string().required(),
  scrumMaster: Joi.string().required(),
  productOwner: Joi.string().required(),
  developers: Joi.array().items(Joi.string().required()).required(),
  startDate: Joi.date().required(),
  methodology: Joi.string().valid("Agile", "Waterfall"),
  location: Joi.string().required(),
});
//Constants
const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

// Helpers
const generateUniqueProductNumber = () => {
  let id;
  do {
    id = parseInt((Math.random() * 10000).toFixed(0)); // Generate a random number
  } while (products.some((p) => p.productId === id));
  return id;
};

// Get all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// get product by it's number
exports.getProductbyId = (req, res) => {
  const product = products.find((p) => {
    return p.productId === parseInt(req.params.productId);
  });

  if (product) {
    res.json(product);
  } else {
    res.status(STATUS_CODES.BAD_REQUEST).json({ message: "Product not found" });
  }
};

// Add a product

exports.addProduct = (req, res) => {
  const newProduct = {
    productId: generateUniqueProductNumber(),
    ...req.body,
  };

  // Valdidate the data against the schema
  const { error } = productSchema.validate(newProduct);
  if (error) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: error.details[0].message });
  }
  // Moves the new added item to the top of the list.
  products.unshift(newProduct);
  res.status(STATUS_CODES.CREATED).json(newProduct);
};

//Update a product

exports.updateProduct = (req, res) => {
  const index = products.findIndex((p) => p.productId == req.params.productId);
  if (index !== -1) {
    const updateProduct = { ...products[index], ...req.body };
    const { error } = productSchema.validate(updateProduct);
    if (error) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: error.details[0].message });
    }
    products[index] = updateProduct;
    res.json(products[index]);
  } else {
    res.status(STATUS_CODES.BAD_REQUEST).json({ message: "Product not found" });
  }
};

// Delete a product

exports.deleteProduct = (req, res) => {
  const index = products.findIndex((p) => p.productId == req.params.productId);

  if (index !== -1) {
    const removedProduct = products.splice(index, 1);
    res.status(STATUS_CODES.OK).json({
      message: "Product deleted successfully.",
      product: removedProduct[0],
    });
  } else {
    res.status(STATUS_CODES.BAD_REQUEST).json({ message: "Product not found" });
  }
};
